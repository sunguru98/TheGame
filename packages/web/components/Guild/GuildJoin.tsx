import { Flex, HStack, Image, List, ListIcon, ListItem, MetaButton, MetaHeading, Text, VStack } from '@metafam/ds';
import { FlexContainer } from 'components/Container';
import { MetaLink } from 'components/Link';
import { CONFIG } from 'config';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const discordOAuthCallbackUrl = `${CONFIG.backendUrl}/actions/discordOAuthCallback`;
const prodDiscordOAuthCallbackUrl = `https://api.metagame.wtf/actions/discordOAuthCallback`;
const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${CONFIG.discordBotClientId}&permissions=268435488&redirect_uri=${encodeURI(discordOAuthCallbackUrl)}&scope=bot`;

export const GuildJoin: React.FC = () => {
  return (
    <FlexContainer flex="1" justify="start" mt={5}>
      <MetaHeading textAlign="center" mb={10}>
        Join MetaGame as Guild
      </MetaHeading>
      { /* TODO get design input, change content and make responsive */ }
      <Flex
        direction="row"
        bg="whiteAlpha.200"
        style={{ backdropFilter: 'blur(7px)' }}
        rounded="lg"
        p="6"
        my="6"
        w="100%"
        align="stretch"
        justify="space-between"
      >
        <HStack h="100%" maxW="60rem" spacing="6" align="stretch">
          <Image
            src="/assets/guilds.png"
            alt="Guild"
            maxW="20rem"
          />
          <VStack spacing={8} align="stretch" pl="6">
            <Text fontSize="xl" fontFamily="mono" color="blueLight">
              Are you part of a group of people building tools &amp; services for a decentralized future?
            </Text>
            <VStack spacing={2} align="stretch">
              <Text>
                Does your group need help 
              </Text>
              <List>
                <ListItem fontStyle="italic" fontSize="sm">
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  finding tools, frameworks or funds?
                </ListItem>
                <ListItem fontStyle="italic" fontSize="sm">
                  <ListIcon as={FaCheckCircle} color="green.500" />
                  getting value-aligned contributors &amp; adopters?
                </ListItem>
              </List>
            </VStack>
            <Text fontSize="sm">
              To apply, your guild must have a <MetaLink isExternal href="https://discord.com/">Discord</MetaLink> server. Clicking the link below will redirect to a Discord page asking for your permission to collect certain relevant information about your guild.
            </Text>
            <MetaButton size="lg" maxW="15rem" as="a" href={discordAuthUrl}>
              Apply to Join
            </MetaButton>
          </VStack>
        </HStack>
      </Flex>
    </FlexContainer>
  );
};
