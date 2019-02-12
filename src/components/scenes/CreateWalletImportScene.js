// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import * as Constants from '../../constants/indexConstants'
import s from '../../locales/strings.js'
import { PrimaryButton } from '../../modules/UI/components/Buttons/index'
import Text from '../../modules/UI/components/FormattedText'
import Gradient from '../../modules/UI/components/Gradient/Gradient.ui'
import SafeAreaView from '../../modules/UI/components/SafeAreaView/index'
import styles from '../../styles/scenes/CreateWalletStyle.js'
import { type GuiWalletType } from '../../types.js'
import { FormField } from '../common/FormField.js'

type CreateWalletImportState = {
  input: string
}

type CreateWalletImportProps = {
  selectedWalletType: GuiWalletType
}

export class CreateWalletImportComponent extends Component<CreateWalletImportProps, CreateWalletImportState> {
  constructor (props: CreateWalletImportProps) {
    super(props)
    this.state = {
      input: ''
    }
  }

  onNext = () => {
    const { selectedWalletType } = this.props
    Actions[Constants.CREATE_WALLET_IMPORT_TRANSITION]({ selectedWalletType })
  }

  onChangeText = (input: string) => {
    this.setState({ input })
  }

  render () {
    return (
      <SafeAreaView>
        <View style={styles.scene}>
          <Gradient style={styles.gradient} />
          <View style={styles.view}>
            <View style={styles.createWalletPromptArea}>
              <Text style={styles.instructionalText}>{s.strings.create_wallet_import_instructions}</Text>
            </View>
            <FormField
              style={[{ flex: 1, height: 150 }]}
              autoFocus
              clearButtonMode={'while-editing'}
              autoCorrect={false}
              onChangeText={this.onChangeText}
              label={s.strings.create_wallet_import_input_prompt}
              value={this.state.input}
              returnKeyType={'next'}
              onSubmitEditing={this.onNext}
              numberOfLines={5}
              multiline={true}
            />
            <View style={styles.buttons}>
              <PrimaryButton style={[styles.next]} onPress={this.onNext}>
                <PrimaryButton.Text>{s.strings.submit}</PrimaryButton.Text>
              </PrimaryButton>
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}
