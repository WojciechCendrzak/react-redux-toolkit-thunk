type FakeAsync = {
  (): Promise<void>;
  <R>(result: R, isError?: boolean): Promise<R>;
};

export const fakeAsync: FakeAsync = <R>(result?: R, isError?: boolean) =>
  result
    ? new Promise<R>((resolve, reject) =>
        !isError ? resolve(result) : reject(result)
      )
    : new Promise<void>((resolve, reject) =>
        !isError ? resolve() : reject(result)
      );
