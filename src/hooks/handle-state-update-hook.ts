import { useState } from 'react';

const useHandleStateUpdateHook = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return { isLoading, setIsLoading };
};

export default useHandleStateUpdateHook;
