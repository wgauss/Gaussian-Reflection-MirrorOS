import React, { useState } from "react"

import { 
    Container,
    Input,
    InputGroup, 
    InputLeftAddon
} from "@chakra-ui/react"


   /* (save this information in local storage rather than state)
    gather user information{
      userName,
      LatLong or zipCode 
    }
    from a list of components (with a preview), allow the user to touch and drag into a grid (from predefined component sizes (ex: colSpan: 3, rowSpan: 1))
    setUp Face recognition
    animation to thank the User
    set 'SetUpCompletion' state to true
    */
export const InitSetup = () => {
    return (
        <>
            <Container width={"50%"} justifyContent={"center"} >
                <form onSubmit={"../utils/changeUserSettings.php"}>
                    <InputGroup>
                        <InputLeftAddon>Name</InputLeftAddon>
                        <Input />
                    </InputGroup>
                    <br/>
                    <InputGroup>
                        <InputLeftAddon>Location</InputLeftAddon>
                        <Input placeholder="ZipCode" />
                    </InputGroup>
                </form>

            </Container>
        </>
    )
}