import { Flex, Tag } from '@chakra-ui/react';

export const TechStackTags = (arr) => {
	return (
		<>
			<Flex gap={2} mt={2} flexWrap='wrap'>
				{arr.arr.map((el) => (
					<Tag key={el} variant='solid' colorScheme='blue'>
						{el}
					</Tag>
				))}
			</Flex>
		</>
	);
};

export const WorkTypeTags = (arr) => {
	return (
		<>
			<Flex gap={2} mt={2}>
				{arr.arr.map((el) => (
					<Tag key={el} variant='solid' colorScheme='teal'>
						{el}
					</Tag>
				))}
			</Flex>
		</>
	);
};
