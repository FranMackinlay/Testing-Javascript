import React, { Component } from 'react';
import { create } from 'react-test-renderer';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    }
  }

  handleClick = () => {
    this.setState({ text: 'Hola Cuarentena!' });
  }

  render() {
    return (
      <button>{this.state.text}</button>
    );
  }
}

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listContent: props.listInit

    }
  }

  add = () => {
    const list = [...this.state.listContent];
    list.push('Hola');
    this.setState({
      listContent: list
    });
  }

  delete = () => {
    const list = [...this.state.listContent];
    list.pop('Hola');
    this.setState({
      listContent: list
    });
  }

  render() {
    const { listContent } = this.state;

    return (
      <div>
        <ul>
          {
            listContent.map((item, index) => (
              <li key={index}>{item}</li>
            ))
          }
        </ul>
        <button onClick={this.add}>Add</button>
        <button onClick={this.delete}>Detete</button>
      </div>
    );
  }
}

describe('button component', () => {
  let instance;
  beforeAll(() => {
    const listInitProp = ['Hola', 'Hola'];
    const component = create(<List listInit={listInitProp} />);
    instance = component.getInstance();
  })

  // test('Click', () => {
  //   expect(instance.state.text).toBe("KeepCoding");
  //   instance.handleClick();
  //   expect(instance.state.text).toBe('Hola Cuarentena!');
  // });

  test('List Init', () => {
    expect(instance.props.listInit.length).toBe(2);
    expect(instance.state.listContent.length).toBe(2);
  });

  test('On Click Add Btn ', () => {
    instance.add();
    expect(instance.state.listContent.length).toBe(3);
  });

  test('On Click Delete Btn', () => {
    instance.delete();
    expect(instance.state.listContent.length).toBe(2);
  });

  test('On Click Delete and list is empty', () => {
    instance.delete();
    instance.delete();
    instance.delete();
    instance.delete();
    expect(instance.state.listContent.length).toBe(0);
  });
});
