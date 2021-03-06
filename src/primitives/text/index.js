import React from 'react';
import {StyleSheet, Text as ReactNativeText} from 'react-native';

import {useTheme} from 'hooks';

function getStyleSheetFromTextProps(props, theme) {
  const style = {};
  const {textAlign} = props;

  if (props.color !== undefined) {
    style.color = theme.colors[props.color] || props.color;
  }

  if (props.fontFamily !== undefined) {
    style.fontFamily = theme.fonts[props.fontFamily] || props.fontFamily;
  } else {
    if (theme.fonts.base) {
      style.fontFamily = theme.fonts.base;
    }
  }

  if (props.fontSize !== undefined) {
    style.fontSize = theme.fontSizes[props.fontSize] || props.fontSize;
  }

  if (props.letterSpacing !== undefined) {
    style.letterSpacing =
      theme.letterSpacings[props.letterSpacing] || props.letterSpacing;
  }

  if (props.lineHeight !== undefined) {
    style.lineHeight = theme.lineHeights[props.lineHeight] || props.lineHeight;
  }

  if (props.m !== undefined) {
    style.margin = theme.space[props.m] || props.m;
  }

  if (props.mb !== undefined) {
    style.marginBottom = theme.space[props.mb] || props.mb;
  }

  if (props.ml !== undefined) {
    style.marginLeft = theme.space[props.ml] || props.ml;
  }

  if (props.mr !== undefined) {
    style.marginRight = theme.space[props.mr] || props.mr;
  }

  if (props.mt !== undefined) {
    style.marginTop = theme.space[props.mt] || props.mt;
  }

  if (props.mx !== undefined) {
    style.marginHorizontal = theme.space[props.mx] || props.mx;
  }

  if (props.my !== undefined) {
    style.marginVertical = theme.space[props.my] || props.my;
  }

  if (props.p !== undefined) {
    style.padding = theme.space[props.p] || props.p;
  }

  if (props.pb !== undefined) {
    style.paddingBottom = theme.space[props.pb] || props.pb;
  }

  if (props.pl !== undefined) {
    style.paddingLeft = theme.space[props.pl] || props.pl;
  }

  if (props.pr !== undefined) {
    style.paddingRight = theme.space[props.pr] || props.pr;
  }

  if (props.pt !== undefined) {
    style.paddingTop = theme.space[props.pt] || props.pt;
  }

  if (props.px !== undefined) {
    style.paddingHorizontal = theme.space[props.px] || props.px;
  }

  if (props.py !== undefined) {
    style.paddingVertical = theme.space[props.py] || props.py;
  }

  return StyleSheet.create({
    text: {
      ...style,
      textAlign,
    },
  });
}

const Text = ({style, ...props}) => {
  const theme = useTheme();

  return (
    <ReactNativeText
      style={[getStyleSheetFromTextProps(props, theme).text, style]}
      {...props}
    />
  );
};

export default Text;
