import React from 'react';
import logo from './logo.svg';
import { Button, Message, Form, Segment, Icon } from 'semantic-ui-react';
import './App.css';
import PlaceholderExampleCard from './placeholder';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button size="small" color="green">
          <Icon name="download"/>
          Download
        </Button>
        <Message icon>
        <Icon name="circle notched" loading />
          <Message.Content>
          <Message.Header>Just one second</Message.Header>
            We're fetching that content for you. Please be patient!
          </Message.Content>
        </Message>
        <Segment inverted>
      <Form inverted>
        <Form.Group widths='equal'>
          <Form.Input fluid label='First name' placeholder='First name' />
          <Form.Input fluid label='Last name' placeholder='Last name' />
        </Form.Group>
      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Button type='submit'>Submit</Button>
    </Form>
    </Segment>
      </header>
    <PlaceholderExampleCard />
    </div>
  );
}

export default App;
