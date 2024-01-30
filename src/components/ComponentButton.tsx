import { Button } from "@chakra-ui/react"


interface IComponentButton {
    text: string,
    event: ()=>void
  }
export const ComponentButton =({text,event}:IComponentButton)=>{
    return(
        <Button onClick={event} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
            {text}
          </Button>
    )
}