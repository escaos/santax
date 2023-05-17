// usePrevNext.test.ts
import { act, renderHook } from '@testing-library/react-hooks';
import { usePrevNext } from '../usePrevNext';

describe('Hook - usePrevNext', () => {
  it('when length is a positive integer', () => {
    const { result } = renderHook(() => usePrevNext(5));
    expect(result.current.assetIdx).toBe(0);
    act(() => {
      result.current.onNext();
    });
    expect(result.current.assetIdx).toBe(1);
    act(() => {
      result.current.onPrevious();
    });
    expect(result.current.assetIdx).toBe(0);
  });

  it('when length is 0', () => {
    const { result } = renderHook(() => usePrevNext(0));
    expect(result.current.assetIdx).toBe(0);
    act(() => {
      result.current.onNext();
    });
    expect(result.current.assetIdx).toBe(0);
    act(() => {
      result.current.onPrevious();
    });
    expect(result.current.assetIdx).toBe(0);
  });

  it('wraps around to the end of the list when assetIdx is already at 0', () => {
    const { result } = renderHook(() => usePrevNext(4));
    expect(result.current.assetIdx).toBe(0);
    act(() => {
      result.current.onPrevious();
    });
    expect(result.current.assetIdx).toBe(3);
    act(() => {
      result.current.onPrevious();
    });
    expect(result.current.assetIdx).toBe(2);
    act(() => {
      result.current.onPrevious();
    });
    expect(result.current.assetIdx).toBe(1);
    act(() => {
      result.current.onPrevious();
    });
    expect(result.current.assetIdx).toBe(0);
  });

  it('does not exceed the end of the list when assetIdx is already at length-1', () => {
    const { result } = renderHook(() => usePrevNext(2));
    expect(result.current.assetIdx).toBe(0);
    act(() => {
      result.current.onNext();
    });
    expect(result.current.assetIdx).toBe(1);
    act(() => {
      result.current.onNext();
    });
    expect(result.current.assetIdx).toBe(1);
  });
});
