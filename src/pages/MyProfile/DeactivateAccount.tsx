import { Button, FormControlLabel, FormGroup, Switch } from "@mui/material";
import React, { useState } from "react";
import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";

const DeactivateAccount = () => {
  const { onLogout } = useAuthContext();
  const [isDeactivated, setIsDeactivated] = useState(false);

  const handleChange = () => {
    setIsDeactivated(!isDeactivated);
  };
  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={<Switch onChange={handleChange} />}
          label="Deactivate Account"
        />
      </FormGroup>
      <Button
        type="submit"
        variant="contained"
        disabled={!isDeactivated}
        onClick={onLogout}
      >
        Save
      </Button>
    </>
  );
};

export default DeactivateAccount;
