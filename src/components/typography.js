import React from 'react';
import { Text, Heading as RHeading } from '@rebass/emotion'

export const Heading1 = props => <RHeading fontSize={[5, 6, 7]} mb={4} fontFamily='stamp' {...props} />
export const Heading2 = props => <RHeading fontSize={[4, 5, 6]} mb={4} fontFamily='sans' {...props} />
export const Heading3 = props => <RHeading fontSize={[3, 4, 5]} mb={4} fontFamily='sans' {...props} />
export const ParagraphText = props => <Text fontSize={3} lineHeight={1.4} fontFamily='sans' style={{ maxWidth: '32em' }}  {...props} />