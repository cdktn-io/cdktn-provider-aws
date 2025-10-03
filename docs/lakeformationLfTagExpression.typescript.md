# `lakeformationLfTagExpression` Submodule <a name="`lakeformationLfTagExpression` Submodule" id="@cdktf/provider-aws.lakeformationLfTagExpression"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LakeformationLfTagExpression <a name="LakeformationLfTagExpression" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.15.0/docs/resources/lakeformation_lf_tag_expression aws_lakeformation_lf_tag_expression}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer"></a>

```typescript
import { lakeformationLfTagExpression } from '@cdktf/provider-aws'

new lakeformationLfTagExpression.LakeformationLfTagExpression(scope: Construct, id: string, config: LakeformationLfTagExpressionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig">LakeformationLfTagExpressionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig">LakeformationLfTagExpressionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.putExpression">putExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExpression` <a name="putExpression" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.putExpression"></a>

```typescript
public putExpression(value: IResolvable | LakeformationLfTagExpressionExpression[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.putExpression.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression">LakeformationLfTagExpressionExpression</a>[]

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LakeformationLfTagExpression resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isConstruct"></a>

```typescript
import { lakeformationLfTagExpression } from '@cdktf/provider-aws'

lakeformationLfTagExpression.LakeformationLfTagExpression.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformElement"></a>

```typescript
import { lakeformationLfTagExpression } from '@cdktf/provider-aws'

lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformResource"></a>

```typescript
import { lakeformationLfTagExpression } from '@cdktf/provider-aws'

lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport"></a>

```typescript
import { lakeformationLfTagExpression } from '@cdktf/provider-aws'

lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LakeformationLfTagExpression resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LakeformationLfTagExpression to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LakeformationLfTagExpression that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.15.0/docs/resources/lakeformation_lf_tag_expression#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LakeformationLfTagExpression to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.expression">expression</a></code> | <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList">LakeformationLfTagExpressionExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.expressionInput">expressionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression">LakeformationLfTagExpressionExpression</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.expression"></a>

```typescript
public readonly expression: LakeformationLfTagExpressionExpressionList;
```

- *Type:* <a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList">LakeformationLfTagExpressionExpressionList</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.expressionInput"></a>

```typescript
public readonly expressionInput: IResolvable | LakeformationLfTagExpressionExpression[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression">LakeformationLfTagExpressionExpression</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpression.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LakeformationLfTagExpressionConfig <a name="LakeformationLfTagExpressionConfig" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.Initializer"></a>

```typescript
import { lakeformationLfTagExpression } from '@cdktf/provider-aws'

const lakeformationLfTagExpressionConfig: lakeformationLfTagExpression.LakeformationLfTagExpressionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.name">name</a></code> | <code>string</code> | The name of the LF-Tag Expression. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.catalogId">catalogId</a></code> | <code>string</code> | The ID of the Data Catalog. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.description">description</a></code> | <code>string</code> | A description of the LF-Tag Expression. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.expression">expression</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression">LakeformationLfTagExpressionExpression</a>[]</code> | expression block. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the LF-Tag Expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.15.0/docs/resources/lakeformation_lf_tag_expression#name LakeformationLfTagExpression#name}

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

The ID of the Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.15.0/docs/resources/lakeformation_lf_tag_expression#catalog_id LakeformationLfTagExpression#catalog_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the LF-Tag Expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.15.0/docs/resources/lakeformation_lf_tag_expression#description LakeformationLfTagExpression#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.expression"></a>

```typescript
public readonly expression: IResolvable | LakeformationLfTagExpressionExpression[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression">LakeformationLfTagExpressionExpression</a>[]

expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.15.0/docs/resources/lakeformation_lf_tag_expression#expression LakeformationLfTagExpression#expression}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.15.0/docs/resources/lakeformation_lf_tag_expression#region LakeformationLfTagExpression#region}

---

### LakeformationLfTagExpressionExpression <a name="LakeformationLfTagExpressionExpression" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression.Initializer"></a>

```typescript
import { lakeformationLfTagExpression } from '@cdktf/provider-aws'

const lakeformationLfTagExpressionExpression: lakeformationLfTagExpression.LakeformationLfTagExpressionExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.15.0/docs/resources/lakeformation_lf_tag_expression#tag_key LakeformationLfTagExpression#tag_key}. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression.property.tagValues">tagValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.15.0/docs/resources/lakeformation_lf_tag_expression#tag_values LakeformationLfTagExpression#tag_values}. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.15.0/docs/resources/lakeformation_lf_tag_expression#tag_key LakeformationLfTagExpression#tag_key}.

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression.property.tagValues"></a>

```typescript
public readonly tagValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.15.0/docs/resources/lakeformation_lf_tag_expression#tag_values LakeformationLfTagExpression#tag_values}.

---

## Classes <a name="Classes" id="Classes"></a>

### LakeformationLfTagExpressionExpressionList <a name="LakeformationLfTagExpressionExpressionList" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer"></a>

```typescript
import { lakeformationLfTagExpression } from '@cdktf/provider-aws'

new lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.get"></a>

```typescript
public get(index: number): LakeformationLfTagExpressionExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression">LakeformationLfTagExpressionExpression</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationLfTagExpressionExpression[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression">LakeformationLfTagExpressionExpression</a>[]

---


### LakeformationLfTagExpressionExpressionOutputReference <a name="LakeformationLfTagExpressionExpressionOutputReference" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer"></a>

```typescript
import { lakeformationLfTagExpression } from '@cdktf/provider-aws'

new lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagValuesInput">tagValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagValues">tagValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression">LakeformationLfTagExpressionExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValuesInput`<sup>Optional</sup> <a name="tagValuesInput" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagValuesInput"></a>

```typescript
public readonly tagValuesInput: string[];
```

- *Type:* string[]

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.tagValues"></a>

```typescript
public readonly tagValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LakeformationLfTagExpressionExpression;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.lakeformationLfTagExpression.LakeformationLfTagExpressionExpression">LakeformationLfTagExpressionExpression</a>

---



