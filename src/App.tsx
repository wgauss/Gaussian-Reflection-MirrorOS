import React, { useState } from "react"

import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  useToast
} from "@chakra-ui/react"

import { ColorModeSwitcher } from "./ColorModeSwitcher"

import "@fontsource/inter";
import "./SCSS/main.scss";
import { InitSetup } from "./components/initSetup";

//below is the ground work for the components to come, here are the respective diagrams

function MirrorOS(){
  /**call from local storage json, build upon said information
   *{
   *  "userName" : {
   *      "Location" : "000000",
   *      "HourFormat" : "12 Hour",
   *      "TimeZone" : "UTC-5",
   *       
   *      "API TOKENS" : "<token>",
   *      "EnabledComponents" : {
   *          "Clock" : {  
   *            "Size" : "XL",
   *            etc...
   *          },
   *          "Settings": {
   *              "changeThemeFromTime"  : false
   *          }
   *       }
   *  },
   * {
   *  "userName" : {
   *      "Location" : "111111",
   *      "API TOKENS" : "<token>",
   *  }
   *}
   * Ideas:
   *    Based on the time of day, change from light theme to dark theme, should be user enabled (set in set up/ settings)
   *     link Instagram, Spotify, Facebook, etc...
   */
}
function Settings(){

}
export const App = () => {
  const [bSetupComplete, fSetupCompleted] = useState(false)
  const [sUsername, fSetUsername] = useState("")
  //save user lat/long in local storage
  return(
    <>
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
      <ColorModeSwitcher position={"revert"} justifySelf="flex-end" />
      <InitSetup/>
      </Grid>
    </Box>
  </ChakraProvider>
    </>
  )
}
