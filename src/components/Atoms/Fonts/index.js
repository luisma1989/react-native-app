// Externals
import styled from 'styled-components/native'
import * as colors from 'utils/constants/colors'

function variantColor({ variant = 'black' }) {
  return colors[`${variant}`]
}

function calculateWeight({ theme, bold }) {
  return bold ? 600 : 300
}

export const H1 = styled.Text`
  font-size: 36px;
  line-height: 35px;
  font-weight: ${calculateWeight};
  margin-top: 0;
  color: ${variantColor};
`

export const H2 = styled.Text`
  font-size: 24px;
  line-height: 26px;
  font-weight: ${calculateWeight};
  margin-top: 0;
`

export const H3 = styled.Text`
  font-size: 22px;
  line-height: 36px;
  font-weight: ${calculateWeight};
  margin-top: 0;
`

export const H4 = styled.Text`
  font-size: 18px;
  line-height: 24px;
  font-weight: ${calculateWeight};
  margin-top: 0;
`

export const Body = styled.Text`
  font-size: 15px;
  line-height: 23px;
  font-weight: ${({ bold }) => (bold ? 600 : 200)};
  margin-top: 0;
`

export const Caps = styled.Text`
  font-size: 14px;
  line-height: 18px;
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  margin-top: 0;
`

export const Micro = styled.Text`
  font-size: 10px;
  line-height: 14px;
  font-weight: 400;
  margin-top: 0;
`

export const BigAmount = styled(H1)`
  text-align: center;
  margin-bottom: 30px;
`
