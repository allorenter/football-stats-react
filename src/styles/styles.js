import { Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const colors = {
    primary: "#1C1E23",
    secondary: "#313641",
    tertiary: "#3E424E",
    detailsColor: "#93A9EC",
    font: "#FFFFFF"
}

export const StyledButton = styled(Button)({
    background: colors.detailsColor,
    color: colors.font,
    maxHeight: "1.8rem"
});

export const DivFlex = styled("div")({
    display: "flex",
    alignItems: "center"
});