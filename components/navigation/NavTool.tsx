// NavTool.tsx
import { useRouter } from 'expo-router';

const NavTool = () => {
  const router = useRouter();

  const navigateTo = (path: string, replace = false) => {
    if (replace) {
      router.replace(path);
    } else {
      router.push(path);
    }
  };

  return { navigateTo };
};

export default NavTool;