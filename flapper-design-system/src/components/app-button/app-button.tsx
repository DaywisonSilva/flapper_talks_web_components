import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-button',
  styleUrl: 'app-button.scss',
  shadow: true,
})
export class AppButton {
  @Prop() type: 'button' | 'submit';
  @Prop() label: string;
  render() {
    return (
      <button type={this.type} class="btn">
        {this.label}
      </button>
    );
  }
}
