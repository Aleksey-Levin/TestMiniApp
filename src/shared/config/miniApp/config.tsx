import {DisplayGate, SDKInitOptions, SDKProvider } from "@tma.js/sdk-react";
import {FC, PropsWithChildren } from "react";

const options: SDKInitOptions = {
    acceptCustomStyles: true,
    cssVars: true,
    complete: true,
    async: true
};

function SDKProviderError({ error }: { error: unknown }) {
    return (
        <div>
            Oops. Something went wrong.
            <blockquote>
                <code>
                    {error instanceof Error
                        ? error.message
                        : JSON.stringify(error)}
                </code>
            </blockquote>
        </div>
    );
}

function SDKProviderLoading() {
    return <div>SDK is loading.</div>;
}

function SDKInitialState() {
    return <div>Waiting for initialization to start.</div>;
}

export const SDKInitProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <SDKProvider options={options}>
            <DisplayGate
                error={SDKProviderError}
                loading={SDKProviderLoading}
                initial={SDKInitialState}
            >{children}</DisplayGate>
        </SDKProvider>
    );
};