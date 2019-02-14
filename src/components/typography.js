import React from 'react';
import { Text, Heading as RHeading } from '@rebass/emotion'

export const Heading = props => <RHeading fontSize={[5, 6, 7]} fontFamily='stamp' {...props} />
export const ParagraphText = props => <Text fontSize={3} lineHeight={1.4} fontFamily='sans' style={{ maxWidth: '32em' }}  {...props} />