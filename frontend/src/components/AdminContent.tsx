import { Card, Checkbox, TextInput, Button } from "flowbite-react";
import { Table } from "flowbite-react";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import { useRouteMatch } from "react-router-dom";

interface Props {
    type? : string;
}

const AdminContent: React.FC<Props> = ({ type }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page: number) => setCurrentPage(page);
    return (
        <div className="w-full h-dvh mx-auto px-96 pt-16 bg-gray-100">
            <Card>
                <h1 className="font-bold text-3xl">{type}</h1>

                <div className="overflow-x-auto">
                    <div className="flex justify-between my-8">
                        <Button className="" pill > Ultimos 30 días</Button>
                        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                    </div>
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell className="p-4">
                                <Checkbox />
                            </Table.HeadCell>
                            <Table.HeadCell>Product name</Table.HeadCell>
                            <Table.HeadCell>Color</Table.HeadCell>
                            <Table.HeadCell>Category</Table.HeadCell>
                            <Table.HeadCell>Price</Table.HeadCell>
                            <Table.HeadCell>
                                <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {'Apple MacBook Pro 17"'}
                                </Table.Cell>
                                <Table.Cell>Sliver</Table.Cell>
                                <Table.Cell>Laptop</Table.Cell>
                                <Table.Cell>$2999</Table.Cell>
                                <Table.Cell>
                                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Edit
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Microsoft Surface Pro
                                </Table.Cell>
                                <Table.Cell>White</Table.Cell>
                                <Table.Cell>Laptop PC</Table.Cell>
                                <Table.Cell>$1999</Table.Cell>
                                <Table.Cell>
                                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Edit
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="p-4">
                                    <Checkbox />
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
                                <Table.Cell>Black</Table.Cell>
                                <Table.Cell>Accessories</Table.Cell>
                                <Table.Cell>$99</Table.Cell>
                                <Table.Cell>
                                    <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Edit
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>

                <div className="flex overflow-x-auto sm:justify-center">
                    <Pagination layout="table" currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
                </div>

            </Card>
        </div>
    )
}

export default AdminContent;