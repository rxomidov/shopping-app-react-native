import React from 'react';
import { ViewStyle, StyleSheet } from 'react-native';
import { NativeRouter, Route, Switch } from "react-router-native";
import { connect } from "react-redux";
import BackHandlerHOC from '../components/HOC/BackHandlerHOC';
import BaseHome from '../pages/BaseHome';
import BaseNext from '../pages/BaseNext';
import { ApplicationConfig } from '../config/DefaultConfig';
import ConfigContext from '../config/AppConfigProvider';
import ThemedView from '../components/UI/ThemedView';
import Login from '../pages/Login/Index';
import CreateAccount from '../pages/CreateAccount/Index';
import Home from '../pages/Home/Index';
import Shopping from '../pages/Shopping';
import ProductDetails from '../pages/Shopping/ProductDetails';
import Bag from '../pages/Bag';
import Payment from '../pages/Payment';
import Checkout from '../pages/Checkout';
import Profile from '../pages/Profile';

interface Props {
  configReducer: ApplicationConfig
}

const Router: React.FunctionComponent<Props> = ({
  configReducer
}: Props) => {
  return (
    <ConfigContext.Provider value={configReducer}>
      <ThemedView style={style.container}>
        <NativeRouter>
          <BackHandlerHOC>
            <Switch>
              <Route exact path="/" component={BaseHome} />
              <Route exact path="/base/" component={BaseNext} />
              <Route exact path="/login/" component={Login} />
              <Route exact path="/createAccount/" component={CreateAccount} />
              <Route exact path="/home/" component={Home} />
              <Route exact path="/shopping/" component={Shopping} />
              <Route path="/productDetails/" component={ProductDetails} />
              <Route path="/bag/" component={Bag} />
              <Route path="/payment/" component={Payment} />
              <Route path="/checkout/" component={Checkout} />
              <Route path="/profile/" component={Profile} />
            </Switch>
          </BackHandlerHOC>
        </NativeRouter>
      </ThemedView>
    </ConfigContext.Provider>
  )
}

export default connect(({ configReducer }) => ({ configReducer }))(Router);

interface Style {
  container: ViewStyle
}

const style: Style = StyleSheet.create<Style>({
  container: {
      flex: 1
  }
})

