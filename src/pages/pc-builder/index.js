/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import cpu from '../../assets/image/cpu.png'
import monitor from '../../assets/image/monitor.jpg'
import motherboard from '../../assets/image/motherboard.png'
import powesupply from '../../assets/image/powe-supply.png'
import ram from '../../assets/image/ram.png'
import storage from '../../assets/image/storage.png'
import Link from "next/link";

const PcBuilderPage = () => {
    const categories = [
        { image: cpu, name: 'CPU / Processor', href: '/pc-builder/cpu' },
        { image: monitor, name: 'Motherboard', href: '/pc-builder/motherboard' },
        { image: motherboard, name: 'RAM', href: '/pc-builder/ram' },
        { image: powesupply, name: 'Power Supply', href: '/pc-builder/power supply' },
        { image: ram, name: 'Storage', href: '/pc-builder/storage' },
        { image: storage, name: 'monitor', href: '/pc-builder/monitor' },

    ];

    return (
        <>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
                <div className="overflow-x-auto">
                    <table className="w-[70%] mx-auto text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead className="dark:bg-gray-700">
                            <tr className="text-left">
                                <th className="p-3">Core Components</th>
                                <th className="p-3"></th>
                                <th className="p-3"></th>
                            </tr>
                        </thead>
                        <tbody>
              {categories.map((category) => (
                <tr key={category.name} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                  <td className="p-3">
                    <div data-next-image>
                      <Image src={category.image} width={50} height={50} className="bg-white rounded-lg" />
                    </div>
                  </td>
                  <td className="p-3">
                    <p>
                      {category.name} <span className="bg-gray-600">Required</span>
                    </p>
                  </td>
                  <td className="p-3 text-right">
                    <button className="btn btn-sm btn-outline btn-primary text-lg capitalize">
                        <Link href={category.href}>Choose</Link></button>
                  </td>
                </tr>
              ))}
            </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default PcBuilderPage;