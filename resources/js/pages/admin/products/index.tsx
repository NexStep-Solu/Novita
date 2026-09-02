import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/layouts/admin/admin-layout';
import { Plus, Edit, Trash2 } from 'lucide-react';
import type { Product } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProductsIndexProps {
    products: Product[];
    categories: string[];
}

export default function ProductsIndex({ products, categories }: ProductsIndexProps) {
    const handleDelete = (id: number) => {
        if (confirm('Are you sure you want to delete this product?')) {
            router.delete(`/admin/products/${id}`);
        }
    };

    return (
        <AdminLayout>
            <Head title="Manage Products" />

            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Products</h1>
                    <p className="text-sm text-muted-foreground">Manage your product catalog and inventory.</p>
                </div>
                <Button asChild className="mt-3 sm:mt-0 w-fit">
                    <Link href="/admin/products/create">
                        <Plus className="h-4 w-4" />
                        Add Product
                    </Link>
                </Button>
            </div>

            <Card className="py-0 gap-0 overflow-hidden shadow-sm">
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b bg-muted/50">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">Name</th>
                                    <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Category</th>
                                    <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">SKU</th>
                                    <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Featured</th>
                                    <th className="h-10 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                                    <th className="h-10 px-4 text-right align-middle font-medium text-muted-foreground">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {products.length > 0 ? (
                                    products.map((product) => (
                                        <tr key={product.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                            <td className="p-4 align-middle font-medium">{product.name}</td>
                                            <td className="p-4 align-middle text-muted-foreground">{product.category || '-'}</td>
                                            <td className="p-4 align-middle text-muted-foreground font-mono text-xs">{product.sku || '-'}</td>
                                            <td className="p-4 align-middle">
                                                {product.is_featured ? (
                                                    <Badge variant="secondary" className="bg-amber-500/15 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-900/50 hover:bg-amber-500/20">
                                                        Featured
                                                    </Badge>
                                                ) : (
                                                    <span className="text-xs text-muted-foreground">—</span>
                                                )}
                                            </td>
                                            <td className="p-4 align-middle">
                                                <Badge
                                                    variant={product.is_active ? 'secondary' : 'outline'}
                                                    className={
                                                        product.is_active
                                                            ? 'bg-green-500/15 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-900/50'
                                                            : 'bg-red-500/10 text-red-700 border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-900/50'
                                                    }
                                                >
                                                    {product.is_active ? 'Active' : 'Inactive'}
                                                </Badge>
                                            </td>
                                            <td className="p-4 align-middle text-right">
                                                <div className="flex justify-end gap-1">
                                                    <Button variant="ghost" size="sm" asChild>
                                                        <Link href={`/admin/products/${product.id}/edit`}>
                                                            <Edit className="h-4 w-4" />
                                                            Edit
                                                        </Link>
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => handleDelete(product.id)}
                                                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                        Delete
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6} className="p-8 text-center text-sm text-muted-foreground">
                                            No products found. Create your first product to get started.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </AdminLayout>
    );
}
