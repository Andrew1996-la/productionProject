import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/reduxProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
