"use client";

import { faChevronDown, faChevronUp } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure, Transition } from "@headlessui/react";
import { PropsWithChildren, ReactNode } from "react";
import { classNames } from "@/utils/util";

export default function DisclosureWrapper({
  button,
  buttonClassName,
  children,
}: PropsWithChildren<{
  button: ReactNode | undefined;
  buttonClassName?: string;
}>) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button>
            <div
              className={classNames(
                "relative overflow-hidden",
                buttonClassName,
              )}
            >
              {button}
              <div className="absolute bottom-0 right-0">
                <FontAwesomeIcon
                  className="mr-2 sm:mr-3 mb-1 sm:mb-2"
                  icon={open ? faChevronUp : faChevronDown}
                />
              </div>
            </div>
          </Disclosure.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel static className="overflow-x-auto">
              {children}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
