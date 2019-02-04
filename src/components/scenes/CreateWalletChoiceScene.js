// @flow

import React, { PureComponent } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import WalletIcon from '../../assets/images/createWallet/wallet_icon_lg.png'
import * as Constants from '../../constants/indexConstants'
import s from '../../locales/strings.js'
import { PrimaryButton, SecondaryButton } from '../../modules/UI/components/Buttons/index'
import Text from '../../modules/UI/components/FormattedText'
import Gradient from '../../modules/UI/components/Gradient/Gradient.ui'
import SafeAreaView from '../../modules/UI/components/SafeAreaView/index'
import styles from '../../styles/scenes/CreateWalletStyle.js'

type CreateWalletChoiceProps = {}

export class CreateWalletChoiceComponent extends PureComponent<CreateWalletChoiceProps> {
  render () {
    return (
      <SafeAreaView>
        <View style={styles.scene}>
          <Gradient style={styles.gradient} />
          <ScrollView>
            <View style={styles.view}>
              <Image source={WalletIcon} style={styles.currencyLogo} resizeMode={'cover'} />
              <View style={styles.createWalletPromptArea}>
                <Text style={styles.instructionalText}>{s.strings.create_wallet_choice_instructions}</Text>
              </View>
              <View style={styles.buttons}>
                <SecondaryButton style={[styles.next]} onPress={Actions[Constants.CREATE_WALLET_SELECT_CRYPTO]}>
                  <SecondaryButton.Text>{s.strings.create_wallet_choice_new_button}</SecondaryButton.Text>
                </SecondaryButton>
              </View>
              <View style={styles.buttons}>
                <PrimaryButton style={[styles.next]} onPress={Actions[Constants.CREATE_WALLET_IMPORT]}>
                  <PrimaryButton.Text>{s.strings.create_wallet_choice_restore_wallet}</PrimaryButton.Text>
                </PrimaryButton>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}
