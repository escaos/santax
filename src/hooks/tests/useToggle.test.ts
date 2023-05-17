// usePrevNext.test.ts
import { act, renderHook } from '@testing-library/react-hooks';
import { useToggle } from '../useToggle';

describe('Hook - usePrevNext', () => {
  it('returns object with value and onToggle properties', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current).toHaveProperty('value');
    expect(result.current).toHaveProperty('onToggle');
  });

  it('initializes value property with false if no initial value is provided', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.value).toBe(false);
  });

  it('onToggle function toggles value property', () => {
    const { result } = renderHook(() => useToggle());
    act(() => {
      result.current.onToggle();
    });
    expect(result.current.value).toBe(true);
    act(() => {
      result.current.onToggle();
    });
    expect(result.current.value).toBe(false);
  });

  it('initializes value property with the provided initial value if provided', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.value).toBe(true);
  });

  it('onToggle function updates value property', () => {
    const { result } = renderHook(() => useToggle());
    act(() => {
      result.current.onToggle();
    });
    expect(result.current.value).toBe(true);
  });
});
