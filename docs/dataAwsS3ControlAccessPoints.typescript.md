# `dataAwsS3ControlAccessPoints` Submodule <a name="`dataAwsS3ControlAccessPoints` Submodule" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3ControlAccessPoints <a name="DataAwsS3ControlAccessPoints" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_access_points aws_s3control_access_points}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer"></a>

```typescript
import { dataAwsS3ControlAccessPoints } from '@cdktn/provider-aws'

new dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints(scope: Construct, id: string, config?: DataAwsS3ControlAccessPointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig">DataAwsS3ControlAccessPointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig">DataAwsS3ControlAccessPointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetDataSourceId">resetDataSourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetDataSourceType">resetDataSourceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetDataSourceId` <a name="resetDataSourceId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetDataSourceId"></a>

```typescript
public resetDataSourceId(): void
```

##### `resetDataSourceType` <a name="resetDataSourceType" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetDataSourceType"></a>

```typescript
public resetDataSourceType(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsS3ControlAccessPoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isConstruct"></a>

```typescript
import { dataAwsS3ControlAccessPoints } from '@cdktn/provider-aws'

dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isTerraformElement"></a>

```typescript
import { dataAwsS3ControlAccessPoints } from '@cdktn/provider-aws'

dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isTerraformDataSource"></a>

```typescript
import { dataAwsS3ControlAccessPoints } from '@cdktn/provider-aws'

dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.generateConfigForImport"></a>

```typescript
import { dataAwsS3ControlAccessPoints } from '@cdktn/provider-aws'

dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsS3ControlAccessPoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsS3ControlAccessPoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsS3ControlAccessPoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_access_points#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsS3ControlAccessPoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.accessPoints">accessPoints</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList">DataAwsS3ControlAccessPointsAccessPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dataSourceIdInput">dataSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dataSourceTypeInput">dataSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dataSourceType">dataSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessPoints`<sup>Required</sup> <a name="accessPoints" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.accessPoints"></a>

```typescript
public readonly accessPoints: DataAwsS3ControlAccessPointsAccessPointsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList">DataAwsS3ControlAccessPointsAccessPointsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `dataSourceIdInput`<sup>Optional</sup> <a name="dataSourceIdInput" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dataSourceIdInput"></a>

```typescript
public readonly dataSourceIdInput: string;
```

- *Type:* string

---

##### `dataSourceTypeInput`<sup>Optional</sup> <a name="dataSourceTypeInput" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dataSourceTypeInput"></a>

```typescript
public readonly dataSourceTypeInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `dataSourceType`<sup>Required</sup> <a name="dataSourceType" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.dataSourceType"></a>

```typescript
public readonly dataSourceType: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3ControlAccessPointsAccessPoints <a name="DataAwsS3ControlAccessPointsAccessPoints" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPoints.Initializer"></a>

```typescript
import { dataAwsS3ControlAccessPoints } from '@cdktn/provider-aws'

const dataAwsS3ControlAccessPointsAccessPoints: dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPoints = { ... }
```


### DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration <a name="DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration.Initializer"></a>

```typescript
import { dataAwsS3ControlAccessPoints } from '@cdktn/provider-aws'

const dataAwsS3ControlAccessPointsAccessPointsVpcConfiguration: dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration = { ... }
```


### DataAwsS3ControlAccessPointsConfig <a name="DataAwsS3ControlAccessPointsConfig" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.Initializer"></a>

```typescript
import { dataAwsS3ControlAccessPoints } from '@cdktn/provider-aws'

const dataAwsS3ControlAccessPointsConfig: dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_access_points#account_id DataAwsS3ControlAccessPoints#account_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_access_points#bucket DataAwsS3ControlAccessPoints#bucket}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_access_points#data_source_id DataAwsS3ControlAccessPoints#data_source_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.dataSourceType">dataSourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_access_points#data_source_type DataAwsS3ControlAccessPoints#data_source_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_access_points#account_id DataAwsS3ControlAccessPoints#account_id}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_access_points#bucket DataAwsS3ControlAccessPoints#bucket}.

---

##### `dataSourceId`<sup>Optional</sup> <a name="dataSourceId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_access_points#data_source_id DataAwsS3ControlAccessPoints#data_source_id}.

---

##### `dataSourceType`<sup>Optional</sup> <a name="dataSourceType" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.dataSourceType"></a>

```typescript
public readonly dataSourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_access_points#data_source_type DataAwsS3ControlAccessPoints#data_source_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_access_points#region DataAwsS3ControlAccessPoints#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3ControlAccessPointsAccessPointsList <a name="DataAwsS3ControlAccessPointsAccessPointsList" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.Initializer"></a>

```typescript
import { dataAwsS3ControlAccessPoints } from '@cdktn/provider-aws'

new dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.get"></a>

```typescript
public get(index: number): DataAwsS3ControlAccessPointsAccessPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3ControlAccessPointsAccessPointsOutputReference <a name="DataAwsS3ControlAccessPointsAccessPointsOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.Initializer"></a>

```typescript
import { dataAwsS3ControlAccessPoints } from '@cdktn/provider-aws'

new dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.accessPointArn">accessPointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.bucketAccountId">bucketAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.dataSourceId">dataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.dataSourceType">dataSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.networkOrigin">networkOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.vpcConfiguration">vpcConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList">DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPoints">DataAwsS3ControlAccessPointsAccessPoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessPointArn`<sup>Required</sup> <a name="accessPointArn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.accessPointArn"></a>

```typescript
public readonly accessPointArn: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketAccountId`<sup>Required</sup> <a name="bucketAccountId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.bucketAccountId"></a>

```typescript
public readonly bucketAccountId: string;
```

- *Type:* string

---

##### `dataSourceId`<sup>Required</sup> <a name="dataSourceId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.dataSourceId"></a>

```typescript
public readonly dataSourceId: string;
```

- *Type:* string

---

##### `dataSourceType`<sup>Required</sup> <a name="dataSourceType" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.dataSourceType"></a>

```typescript
public readonly dataSourceType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkOrigin`<sup>Required</sup> <a name="networkOrigin" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.networkOrigin"></a>

```typescript
public readonly networkOrigin: string;
```

- *Type:* string

---

##### `vpcConfiguration`<sup>Required</sup> <a name="vpcConfiguration" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.vpcConfiguration"></a>

```typescript
public readonly vpcConfiguration: DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList">DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3ControlAccessPointsAccessPoints;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPoints">DataAwsS3ControlAccessPointsAccessPoints</a>

---


### DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList <a name="DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.Initializer"></a>

```typescript
import { dataAwsS3ControlAccessPoints } from '@cdktn/provider-aws'

new dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference <a name="DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsS3ControlAccessPoints } from '@cdktn/provider-aws'

new dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration">DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlAccessPoints.DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration">DataAwsS3ControlAccessPointsAccessPointsVpcConfiguration</a>

---



