import {
  MantineNumberSize,
  ActionIcon,
  Box,
  Navbar,
  ScrollArea,
  useMantineTheme,
  useMantineColorScheme,
  Title,
  ThemeIcon,
  UnstyledButton,
  Group,
  Text,
  Avatar,
} from '@mantine/core'
import React from 'react'
type Props = {
  opened: boolean
  hiddenBreakpoint: MantineNumberSize
}

const Nav = ({ opened, hiddenBreakpoint }: Props) => {
  return (
    <Navbar
      p="xs"
      width={{ sm: 300 }}
      hiddenBreakpoint={hiddenBreakpoint}
      hidden={!opened}
    >
      <Navbar.Section mt="xs">brand</Navbar.Section>
      <Navbar.Section grow mt="md">
        Links here
      </Navbar.Section>
      <Navbar.Section>Avatar here</Navbar.Section>
    </Navbar>
  )
}

export default Nav
