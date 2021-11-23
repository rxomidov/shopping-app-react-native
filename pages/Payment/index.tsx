import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import useTheme from "../../hooks/useTheme";
import { View, ViewStyle, StyleSheet, TextStyle, TouchableOpacity, ScrollView, Image, TextInput} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ThemedText from '../../components/UI/ThemedText';
import { AppLanguage } from '../../config/languages';
import useLanguage from '../../hooks/useLanguage';

interface Props extends RouteComponentProps {
  history
}

// @ts-ignore
const ImagePath = require("../../images/card.png")

const Payment: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const language: AppLanguage = useLanguage();

  const backPress = () => {
    history.goBack();
  }

  return (
    <View style={style.mainContainer}>
      <ScrollView>
        <View style={style.contentContainer}>
          <View style={[style.container, {paddingBottom: 10 ,paddingLeft: 10}]}>
            <View style={[style.childContainer, style.leftContainer]}>
              <TouchableOpacity onPress={backPress}>
                <MaterialIcon name="arrow-left" size={30} color={theme.textColor} style={style.backIcon} />
              </TouchableOpacity>
            </View>
            <View style={[style.childContainer, style.centerContainer]}>
              <ThemedText styleKey="textColor" style={style.title}>{language.labelMethod}</ThemedText>
            </View>
          </View>
        </View>
        <View style={style.contentContainer}>
          <View style={[style.container, {paddingTop: 20}]}>
            <View style={[style.childContainer, style.centerContainer]}>
              <Image source={ImagePath} style={{width: 340 , height: 220}}/>
            </View>
          </View>
          <View style={[style.container, {paddingLeft: 0, paddingRight: 0, paddingTop: 30}]}>
            <View style={[style.childContainer, style.leftContainer, {flex: 2}]}>
              <View style={[style.hairline, {backgroundColor: theme.inputBorderColor}]} />
            </View>
            <View style={[style.childContainer, style.centerContainer, {flex: 1}]}>
              <ThemedText styleKey="textColor" style={style.content}>OR</ThemedText>
            </View>
            <View style={[style.childContainer, style.rightContainer, {flex: 2}]}>
              <View style={[style.hairline, {backgroundColor: theme.inputBorderColor}]} />
            </View>
          </View>
        </View>
        <View style={style.contentContainer}>
          <TextInput
            style={[style.inputContainer, {borderBottomColor: theme.inputBorderColor, color: theme.textColor}]}
            placeholderTextColor={theme.lightTextColor}
            placeholder="Name on Card"
          />
          <TextInput
            style={[style.inputContainer, {borderBottomColor: theme.inputBorderColor, color: theme.textColor}]}
            placeholderTextColor={theme.lightTextColor}
            placeholder="Card Number"
            secureTextEntry={true}
          />
          <View style={[style.container, {paddingLeft: 0, paddingRight: 0, paddingTop: 0}]}>
          <View style={[style.childContainer, style.leftContainer, {flex: 5, marginRight: 10}]}>
            <TextInput
              style={[style.inputContainer, {borderBottomColor: theme.inputBorderColor, color: theme.textColor}]}
              placeholderTextColor={theme.lightTextColor}
              placeholder="Exp Month"
            />
          </View>
          <View style={[style.childContainer, style.rightContainer, {flex: 5, marginLeft: 10}]}>
            <TextInput
              style={[style.inputContainer, {borderBottomColor: theme.inputBorderColor, color: theme.textColor, paddingLeft: 5}]}
              placeholderTextColor={theme.lightTextColor}
              placeholder="CVV"
            />
          </View>
          </View>
        </View>
        <View style={style.footerContainer}>
          <View style={[style.childContainer, style.centerContainer]}>
            <View style={[style.checkoutButton, {backgroundColor: theme.highlightColor}]}>
              <TouchableOpacity>
                <ThemedText styleKey="highlightTextColor" style={style.checkoutStyle}>{language.labelCard}</ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Payment;

interface Style {
  mainContainer: ViewStyle;
  contentContainer: ViewStyle;
  container: ViewStyle;
  childContainer: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  centerContainer: ViewStyle;
  backIcon: ViewStyle;
  hairline: ViewStyle;
  footerContainer: ViewStyle;
  checkoutButton: ViewStyle;
  title: TextStyle;
  content: TextStyle;
  inputContainer: TextStyle;
  checkoutStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
  mainContainer: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 10,
  },
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  childContainer: {
    flex: 1,
    justifyContent: "center",
  },
  leftContainer: {
    alignItems: "flex-start",
    flex: 0,
  },
  centerContainer: {
    alignItems: "center",
    flex: 8,
  },
  rightContainer: {
    alignItems: "flex-end",
    flex: 0,
  },
  footerContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: 300
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
  },
  title: {
    fontSize: 25,
    paddingTop: 15,
  },
  hairline: {
    height: 2,
    width: 165
  },
  content: {
    fontSize: 16,
    padding: 10,
    alignSelf: 'center',
  },
  inputContainer: {
    height: 40,
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 2,
    fontSize: 14,
    paddingLeft: 20,
    paddingRight: 20,
  },
  checkoutButton: {
    borderRadius: 50,
    width: '80%',
    alignItems: 'center'
  },
  checkoutStyle: {
    fontSize: 16,
    padding: 10,
  },
});
