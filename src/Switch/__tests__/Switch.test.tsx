import React from 'react';
import Switch from '../index';
import { renderWithWrapper, fireEvent } from '../../../.ci/testHelper';
import { FullTheme } from '../../config';

describe('Switch Component', () => {
  it.skip('', () => {
    const { toJSON } = renderWithWrapper(<Switch value color="green" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <Switch color={'purple'} />,
      'RNE__SWITCH'
    );
    expect(wrapper.props).toMatchObject({
      onTintColor: 'purple',
    });
  });

  it.skip('', () => {
    const onValueChange = jest.fn();
    const { wrapper } = renderWithWrapper(
      <Switch value disabled onValueChange={onValueChange} />,
      'RNE__SWITCH'
    );
    fireEvent(wrapper, 'onValueChange');
    expect(onValueChange).toHaveBeenCalledTimes(1);
  });

  it.skip('', () => {
    const { wrapper } = renderWithWrapper(
      <Switch value color="green" style={{ margin: 10 }} />,
      'RNE__SWITCH'
    );
    expect(wrapper.props.style[1]).toMatchObject({
      margin: 10,
    });
  });

  it.skip('', () => {
    const enabledComponent = renderWithWrapper(<Switch value />);
    const enabledSwitch = enabledComponent.getByA11yRole('switch');
    expect(enabledSwitch.props.accessibilityState).toMatchObject({
      checked: true,
      disabled: false,
    });

    const disabledComponent = renderWithWrapper(
      <Switch value={false} disabled />
    );
    const disabledSwitch = disabledComponent.getByA11yRole('switch');
    expect(disabledSwitch.props.accessibilityState).toMatchObject({
      checked: false,
      disabled: true,
    });
  });

  it('should apply from theme', () => {
    const theme: Partial<FullTheme> = {
      Switch: {
        color: 'purple',
      },
    };
    const { wrapper } = renderWithWrapper(<Switch />, 'RNE__SWITCH', theme);
    expect(wrapper.props).toMatchObject({
      onTintColor: 'purple',
    });
  });
});
