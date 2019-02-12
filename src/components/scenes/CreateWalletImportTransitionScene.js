// @flow

import React, { Component } from 'react'
import { Animated, Image, View } from 'react-native'
import { Actions } from 'react-native-router-flux'

import CheckIcon from '../../assets/images/createWallet/check_icon_lg.png'
import * as Constants from '../../constants/indexConstants'
import s from '../../locales/strings.js'
import Text from '../../modules/UI/components/FormattedText'
import Gradient from '../../modules/UI/components/Gradient/Gradient.ui'
import SafeAreaView from '../../modules/UI/components/SafeAreaView/index'
import styles from '../../styles/scenes/CreateWalletStyle.js'
import { type GuiWalletType } from '../../types.js'

type CreateWalletImportTransitionState = {
  opacity: number
}

type CreateWalletImportTransitionProps = {
  selectedWalletType: GuiWalletType
}

export class CreateWalletImportTransitionComponent extends Component<CreateWalletImportTransitionProps, CreateWalletImportTransitionState> {
  constructor (props: CreateWalletImportTransitionProps) {
    super(props)
    this.state = {
      opacity: new Animated.Value(0)
    }
  }

  componentDidMount = () => {
    const { selectedWalletType } = this.props
    setTimeout(() => {
      Animated.sequence([
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 1500
        }),
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 1400
        }),
        Animated.timing(this.state.opacity, {
          toValue: 0,
          duration: 1500
        })
      ]).start(() => {
        Actions[Constants.CREATE_WALLET_SELECT_FIAT]({ selectedWalletType })
      })
    }, 400)
  }

  render () {
    const { opacity } = this.state
    return (
      <SafeAreaView>
        <View style={styles.scene}>
          <Gradient style={styles.gradient} />
          <Animated.View style={[styles.view, styles.createWalletImportTransitionView, { opacity: opacity }]}>
            <Image source={CheckIcon} style={[styles.currencyLogo, { marginBottom: 36 }]} resizeMode={'cover'} />
            <Text style={styles.createWalletImportTransitionText}>{s.strings.create_wallet_import_successful}</Text>
          </Animated.View>
        </View>
      </SafeAreaView>
    )
  }
}
