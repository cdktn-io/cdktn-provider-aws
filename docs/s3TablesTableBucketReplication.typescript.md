# `s3TablesTableBucketReplication` Submodule <a name="`s3TablesTableBucketReplication` Submodule" id="@cdktn/provider-aws.s3TablesTableBucketReplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3TablesTableBucketReplication <a name="S3TablesTableBucketReplication" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication aws_s3tables_table_bucket_replication}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer"></a>

```typescript
import { s3TablesTableBucketReplication } from '@cdktn/provider-aws'

new s3TablesTableBucketReplication.S3TablesTableBucketReplication(scope: Construct, id: string, config: S3TablesTableBucketReplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig">S3TablesTableBucketReplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig">S3TablesTableBucketReplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.resetRule">resetRule</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.putRule"></a>

```typescript
public putRule(value: IResolvable | S3TablesTableBucketReplicationRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>[]

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRule` <a name="resetRule" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.resetRule"></a>

```typescript
public resetRule(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a S3TablesTableBucketReplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isConstruct"></a>

```typescript
import { s3TablesTableBucketReplication } from '@cdktn/provider-aws'

s3TablesTableBucketReplication.S3TablesTableBucketReplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformElement"></a>

```typescript
import { s3TablesTableBucketReplication } from '@cdktn/provider-aws'

s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformResource"></a>

```typescript
import { s3TablesTableBucketReplication } from '@cdktn/provider-aws'

s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport"></a>

```typescript
import { s3TablesTableBucketReplication } from '@cdktn/provider-aws'

s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a S3TablesTableBucketReplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3TablesTableBucketReplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3TablesTableBucketReplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the S3TablesTableBucketReplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList">S3TablesTableBucketReplicationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.versionToken">versionToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.tableBucketArnInput">tableBucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.tableBucketArn">tableBucketArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.rule"></a>

```typescript
public readonly rule: S3TablesTableBucketReplicationRuleList;
```

- *Type:* <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList">S3TablesTableBucketReplicationRuleList</a>

---

##### `versionToken`<sup>Required</sup> <a name="versionToken" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.versionToken"></a>

```typescript
public readonly versionToken: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | S3TablesTableBucketReplicationRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>[]

---

##### `tableBucketArnInput`<sup>Optional</sup> <a name="tableBucketArnInput" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.tableBucketArnInput"></a>

```typescript
public readonly tableBucketArnInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `tableBucketArn`<sup>Required</sup> <a name="tableBucketArn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.tableBucketArn"></a>

```typescript
public readonly tableBucketArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3TablesTableBucketReplicationConfig <a name="S3TablesTableBucketReplicationConfig" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.Initializer"></a>

```typescript
import { s3TablesTableBucketReplication } from '@cdktn/provider-aws'

const s3TablesTableBucketReplicationConfig: s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#role S3TablesTableBucketReplication#role}. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.tableBucketArn">tableBucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#table_bucket_arn S3TablesTableBucketReplication#table_bucket_arn}. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>[]</code> | rule block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#role S3TablesTableBucketReplication#role}.

---

##### `tableBucketArn`<sup>Required</sup> <a name="tableBucketArn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.tableBucketArn"></a>

```typescript
public readonly tableBucketArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#table_bucket_arn S3TablesTableBucketReplication#table_bucket_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#region S3TablesTableBucketReplication#region}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | S3TablesTableBucketReplicationRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#rule S3TablesTableBucketReplication#rule}

---

### S3TablesTableBucketReplicationRule <a name="S3TablesTableBucketReplicationRule" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule.Initializer"></a>

```typescript
import { s3TablesTableBucketReplication } from '@cdktn/provider-aws'

const s3TablesTableBucketReplicationRule: s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule.property.destination">destination</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>[]</code> | destination block. |

---

##### `destination`<sup>Optional</sup> <a name="destination" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule.property.destination"></a>

```typescript
public readonly destination: IResolvable | S3TablesTableBucketReplicationRuleDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>[]

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#destination S3TablesTableBucketReplication#destination}

---

### S3TablesTableBucketReplicationRuleDestination <a name="S3TablesTableBucketReplicationRuleDestination" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination.Initializer"></a>

```typescript
import { s3TablesTableBucketReplication } from '@cdktn/provider-aws'

const s3TablesTableBucketReplicationRuleDestination: s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination.property.destinationTableBucketArn">destinationTableBucketArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#destination_table_bucket_arn S3TablesTableBucketReplication#destination_table_bucket_arn}. |

---

##### `destinationTableBucketArn`<sup>Required</sup> <a name="destinationTableBucketArn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination.property.destinationTableBucketArn"></a>

```typescript
public readonly destinationTableBucketArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/s3tables_table_bucket_replication#destination_table_bucket_arn S3TablesTableBucketReplication#destination_table_bucket_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3TablesTableBucketReplicationRuleDestinationList <a name="S3TablesTableBucketReplicationRuleDestinationList" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer"></a>

```typescript
import { s3TablesTableBucketReplication } from '@cdktn/provider-aws'

new s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.get"></a>

```typescript
public get(index: number): S3TablesTableBucketReplicationRuleDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableBucketReplicationRuleDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>[]

---


### S3TablesTableBucketReplicationRuleDestinationOutputReference <a name="S3TablesTableBucketReplicationRuleDestinationOutputReference" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer"></a>

```typescript
import { s3TablesTableBucketReplication } from '@cdktn/provider-aws'

new s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.destinationTableBucketArnInput">destinationTableBucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.destinationTableBucketArn">destinationTableBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationTableBucketArnInput`<sup>Optional</sup> <a name="destinationTableBucketArnInput" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.destinationTableBucketArnInput"></a>

```typescript
public readonly destinationTableBucketArnInput: string;
```

- *Type:* string

---

##### `destinationTableBucketArn`<sup>Required</sup> <a name="destinationTableBucketArn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.destinationTableBucketArn"></a>

```typescript
public readonly destinationTableBucketArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableBucketReplicationRuleDestination;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>

---


### S3TablesTableBucketReplicationRuleList <a name="S3TablesTableBucketReplicationRuleList" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer"></a>

```typescript
import { s3TablesTableBucketReplication } from '@cdktn/provider-aws'

new s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.get"></a>

```typescript
public get(index: number): S3TablesTableBucketReplicationRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableBucketReplicationRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>[]

---


### S3TablesTableBucketReplicationRuleOutputReference <a name="S3TablesTableBucketReplicationRuleOutputReference" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer"></a>

```typescript
import { s3TablesTableBucketReplication } from '@cdktn/provider-aws'

new s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.putDestination">putDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.resetDestination">resetDestination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestination` <a name="putDestination" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.putDestination"></a>

```typescript
public putDestination(value: IResolvable | S3TablesTableBucketReplicationRuleDestination[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.putDestination.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>[]

---

##### `resetDestination` <a name="resetDestination" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.resetDestination"></a>

```typescript
public resetDestination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList">S3TablesTableBucketReplicationRuleDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.destinationInput">destinationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.destination"></a>

```typescript
public readonly destination: S3TablesTableBucketReplicationRuleDestinationList;
```

- *Type:* <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestinationList">S3TablesTableBucketReplicationRuleDestinationList</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: IResolvable | S3TablesTableBucketReplicationRuleDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleDestination">S3TablesTableBucketReplicationRuleDestination</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3TablesTableBucketReplicationRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.s3TablesTableBucketReplication.S3TablesTableBucketReplicationRule">S3TablesTableBucketReplicationRule</a>

---



