import { Button, Heading, SimpleGrid, Text, FormControl, Input, FormErrorMessage } from '@chakra-ui/react';
import { useEffect } from 'react';
import plot from '../plot.json';

import { Field, Form, Formik } from 'formik';

function Screen({ currentScreen, onUpdateScreen }) {
  const { choices, heading, text, correctAnswer, screenTo } = plot[currentScreen];

  const onChoiceClicked = (choice) => {
    onUpdateScreen(choice.screenTo);
  };

  useEffect(() => {
    // change background image on component mount
    document.body.style.setProperty('background-image', 'url("https://www.shutterstock.com/image-photo/robin-erithacus-rubecula-isolated-on-260nw-742894039.jpg")', 'important');
    return () => {
      document.body.style.setProperty('background-image', '');
    };
  }, []);

  const validateName = (userAnswer) => {
    let error;
    if (!userAnswer) {
      error = 'An answer is required';
    } else if (userAnswer.trim().toLowerCase() !== correctAnswer.trim().toLowerCase()) {
      error = 'Wrong answer! 😱';
    }
    return error;
  };
  
  return (
    <>
      <Heading my='5'>{heading}</Heading>
      <Text my='5'>{text}</Text>
      {
        choices &&
        <SimpleGrid my='5' w='100%' columns={{sm: 1, md: 2}} gap='6'>
          {
            choices.map((choice, index) => (
              <Button
                key={index}
                whiteSpace='normal'
                height='auto'
                blockSize='auto'
                py='5'
                w='100%'
                h='100%'
                colorScheme='blue'
                onClick={() => onChoiceClicked(choice)}
              >{choice.label}</Button>
            ))
          }
        </SimpleGrid>
      }
      {
        correctAnswer && 
        <Formik
          initialValues={{ answer: '' }}
          onSubmit={() => onUpdateScreen(screenTo)}
        >
          <Form>
            <Field name='answer' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.answer && form.touched.answer}>
                  <Input mt='5' {...field} placeholder='Your answer' />
                  <FormErrorMessage mt='1' color='red'>{form.errors.answer}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              py='6'
              my='6'
              colorScheme='blue'
              type='submit'
              w='100%'
            >
              Submit
            </Button>
          </Form>
        </Formik>
      }
    </>
  );
}

export default Screen;
