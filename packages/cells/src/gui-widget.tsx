import * as React from 'react';
import { ReactWidget } from '@jupyterlab/ui-components';
import { ICellModel } from './model';

export class GUICellInput extends ReactWidget {
  model: ICellModel;
  initalValue: string;

  constructor(options: GUICellInput.IOptions) {
    super();
    this.model = options.model;
    this.initalValue = this.model.value.text || '';
  }

  onBeforeAttach() {
    this.initalValue = this.model.value.text || '';
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.model.value.text = e.target.value;
  };

  render() {
    return (
      <div style={{ marginLeft: 64 }}>
        <input defaultValue={this.initalValue} onChange={this.onChange} />
      </div>
    );
  }
}

export namespace GUICellInput {
  export interface IOptions {
    /**
     * The model used by the widget.
     */
    model: ICellModel;
  }
}
