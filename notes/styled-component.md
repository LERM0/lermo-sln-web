# Styled Component
- pattern
- theme

## pattern
```
import wrapProps

export default wrapProps(styled.div`
  /* CSS */
`);
```

## theme
```
export default styled.div`
  color: ${(props) => props.theme.colors.main};
`;
```