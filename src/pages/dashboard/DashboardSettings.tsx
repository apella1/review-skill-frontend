import { useState } from "react";
import { DashboardLayout, ProtectedLayout } from "../../layouts";
import { DashboardMainContent } from "../../components";

export default function DashboardSettings() {
  const [twoFactorAuth, setTwoFactorAuth] = useState<boolean>(false);
  const handleToggle = () => {
    setTwoFactorAuth((prev) => !prev);
  };
  const [passwordData, setPasswordData] = useState({
    currentPass: "",
    newPass: "",
    newPassConf: "",
  });

  const handlePasswordDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <ProtectedLayout>
      <DashboardLayout>
        <DashboardMainContent />
        <section className="flex flex-col">
          <form action="" className="flex flex-col space-y-4">
            <section className="flex flex-col space-y-12">
              <section className="flex flex-col space-y-3">
                <h2 className="text-[#6C6C6C] text-[17px] leading-[20px] font-medium">
                  Change Password
                </h2>
                <div className="border border-[#D9D9D9] rounded-[8px] p-4 flex flex-col space-y-4">
                  <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="current"
                      className="text-[#666666] text-[14px] leading-[21px] font-medium"
                    >
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="currentPass"
                      value={passwordData.currentPass}
                      onChange={handlePasswordDataChange}
                      className="border border-[#D9D9D9] py-2 px-4 text-[#000000] text-[14px] leading-[20px] rounded-[8px] placeholder:text-[#7C7C8D] placeholder:text-[14px] placeholder:leading-[20px]"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="current"
                      className="text-[#666666] text-[14px] leading-[21px] font-medium"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newPass"
                      value={passwordData.newPass}
                      onChange={handlePasswordDataChange}
                      className="border border-[#D9D9D9] py-2 px-4 text-[#000000] text-[14px] leading-[20px] rounded-[8px] placeholder:text-[#7C7C8D] placeholder:text-[14px] placeholder:leading-[20px]"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="current"
                      className="text-[#666666] text-[14px] leading-[21px] font-medium"
                    >
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="newPassConf"
                      value={passwordData.newPassConf}
                      onChange={handlePasswordDataChange}
                      className="border border-[#D9D9D9] py-2 px-4 text-[#000000] text-[14px] leading-[20px] rounded-[8px] placeholder:text-[#7C7C8D] placeholder:text-[14px] placeholder:leading-[20px]"
                    />
                  </div>
                  <button className="bg-[#035afc] px-4 py-2 rounded-[8px] text-white text-[14px] leading-[20px] font-medium">
                    Change Password
                  </button>
                </div>
              </section>
              <section className="flex flex-col space-y-6 p-8 border border-gray-200">
                <h2 className="text-[#6C6C6C] text-[17px] leading-[20px] font-medium">
                  Toggle Two-Factor Authentication
                </h2>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="phone"
                    className="text-[#6C6C6C] text-[17px] leading-[20px] font-medium"
                  >
                    2-FA Authentication
                  </label>
                  <div
                    className={`rounded-full w-10 py-[2px] ${
                      twoFactorAuth ? "bg-[#085ED8]" : "bg-[#5570F166]"
                    }`}
                  >
                    <div
                      onClick={handleToggle}
                      className={`w-4 h-4 rounded-full shadow-md transform transition duration-300 ease-in-out cursor-pointer ${
                        twoFactorAuth
                          ? "bg-[#ffffff] translate-x-6"
                          : "translate-x-0 bg-[#BBC5CB] "
                      }`}
                    ></div>
                  </div>
                </div>
              </section>
            </section>
          </form>
        </section>
      </DashboardLayout>
    </ProtectedLayout>
  );
}
