# `s3VectorsVectorBucketPolicy` Submodule <a name="`s3VectorsVectorBucketPolicy` Submodule" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3VectorsVectorBucketPolicy <a name="S3VectorsVectorBucketPolicy" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_vector_bucket_policy aws_s3vectors_vector_bucket_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.Initializer"></a>

```typescript
import { s3VectorsVectorBucketPolicy } from '@cdktn/provider-aws'

new s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy(scope: Construct, id: string, config: S3VectorsVectorBucketPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig">S3VectorsVectorBucketPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig">S3VectorsVectorBucketPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3VectorsVectorBucketPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.isConstruct"></a>

```typescript
import { s3VectorsVectorBucketPolicy } from '@cdktn/provider-aws'

s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.isTerraformElement"></a>

```typescript
import { s3VectorsVectorBucketPolicy } from '@cdktn/provider-aws'

s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.isTerraformResource"></a>

```typescript
import { s3VectorsVectorBucketPolicy } from '@cdktn/provider-aws'

s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.generateConfigForImport"></a>

```typescript
import { s3VectorsVectorBucketPolicy } from '@cdktn/provider-aws'

s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a S3VectorsVectorBucketPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3VectorsVectorBucketPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3VectorsVectorBucketPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_vector_bucket_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3VectorsVectorBucketPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.policyInput">policyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.vectorBucketArnInput">vectorBucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.policy">policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.vectorBucketArn">vectorBucketArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.policyInput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `vectorBucketArnInput`<sup>Optional</sup> <a name="vectorBucketArnInput" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.vectorBucketArnInput"></a>

```typescript
public readonly vectorBucketArnInput: string;
```

- *Type:* string

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `vectorBucketArn`<sup>Required</sup> <a name="vectorBucketArn" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.vectorBucketArn"></a>

```typescript
public readonly vectorBucketArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3VectorsVectorBucketPolicyConfig <a name="S3VectorsVectorBucketPolicyConfig" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.Initializer"></a>

```typescript
import { s3VectorsVectorBucketPolicy } from '@cdktn/provider-aws'

const s3VectorsVectorBucketPolicyConfig: s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.policy">policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_vector_bucket_policy#policy S3VectorsVectorBucketPolicy#policy}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.vectorBucketArn">vectorBucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_vector_bucket_policy#vector_bucket_arn S3VectorsVectorBucketPolicy#vector_bucket_arn}. |
| <code><a href="#@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.policy"></a>

```typescript
public readonly policy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_vector_bucket_policy#policy S3VectorsVectorBucketPolicy#policy}.

---

##### `vectorBucketArn`<sup>Required</sup> <a name="vectorBucketArn" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.vectorBucketArn"></a>

```typescript
public readonly vectorBucketArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_vector_bucket_policy#vector_bucket_arn S3VectorsVectorBucketPolicy#vector_bucket_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3VectorsVectorBucketPolicy.S3VectorsVectorBucketPolicyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3vectors_vector_bucket_policy#region S3VectorsVectorBucketPolicy#region}

---



