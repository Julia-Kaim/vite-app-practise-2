import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

export default function TextInput() {
  return (
    <FormControl variant="standard">
      <InputLabel htmlFor="input-with-icon-adornment"></InputLabel>
      <Input
        id="input-with-icon-adornment"
        startAdornment={<InputAdornment position="start"></InputAdornment>}
      />
    </FormControl>
  );
}
