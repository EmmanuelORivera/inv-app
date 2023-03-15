import React, { useState } from 'react'
import {
  AppShell,
  Header,
  Text,
  MediaQuery,
  useMantineTheme,
  Burger,
} from '@mantine/core'
import Nav from './Nav'

type Props = {
  children?: React.ReactNode
}

const PageLayout = ({ children }: Props) => {
  const theme = useMantineTheme()
  const [opend, setOpend] = useState(false)
  return (
    <AppShell
      style={{
        background:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[8]
            : theme.colors.gray[0],
      }}
      navbarOffsetBreakpoint="sm"
      navbar=<Nav opened={opend} hiddenBreakpoint="sm" />
      header={
        <Header height={70} p="md">
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opend}
                onClick={() => setOpend(!opend)}
                size="md"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Text>Inventory App</Text>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  )
}

export default PageLayout
