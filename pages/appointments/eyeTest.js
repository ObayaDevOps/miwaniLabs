import { InlineWidget } from "react-calendly";
import { Box} from "@chakra-ui/react";


export default  function EyeTestCalendar () {
    return (
        <Box >
        <InlineWidget url="https://calendly.com/medoptics-test" />
      </Box>
    );
}