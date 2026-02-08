# `dataAwsS3ControlMultiRegionAccessPoints` Submodule <a name="`dataAwsS3ControlMultiRegionAccessPoints` Submodule" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3ControlMultiRegionAccessPoints <a name="DataAwsS3ControlMultiRegionAccessPoints" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_multi_region_access_points aws_s3control_multi_region_access_points}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoints } from '@cdktn/provider-aws'

new dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints(scope: Construct, id: string, config?: DataAwsS3ControlMultiRegionAccessPointsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig">DataAwsS3ControlMultiRegionAccessPointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig">DataAwsS3ControlMultiRegionAccessPointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsS3ControlMultiRegionAccessPoints resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isConstruct"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoints } from '@cdktn/provider-aws'

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformElement"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoints } from '@cdktn/provider-aws'

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformDataSource"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoints } from '@cdktn/provider-aws'

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoints } from '@cdktn/provider-aws'

dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsS3ControlMultiRegionAccessPoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsS3ControlMultiRegionAccessPoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsS3ControlMultiRegionAccessPoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_multi_region_access_points#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsS3ControlMultiRegionAccessPoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accessPoints">accessPoints</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `accessPoints`<sup>Required</sup> <a name="accessPoints" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accessPoints"></a>

```typescript
public readonly accessPoints: DataAwsS3ControlMultiRegionAccessPointsAccessPointsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPoints.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3ControlMultiRegionAccessPointsAccessPoints <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPoints" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoints } from '@cdktn/provider-aws'

const dataAwsS3ControlMultiRegionAccessPointsAccessPoints: dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints = { ... }
```


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoints } from '@cdktn/provider-aws'

const dataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock: dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock = { ... }
```


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoints } from '@cdktn/provider-aws'

const dataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions: dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions = { ... }
```


### DataAwsS3ControlMultiRegionAccessPointsConfig <a name="DataAwsS3ControlMultiRegionAccessPointsConfig" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoints } from '@cdktn/provider-aws'

const dataAwsS3ControlMultiRegionAccessPointsConfig: dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_multi_region_access_points#account_id DataAwsS3ControlMultiRegionAccessPoints#account_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_multi_region_access_points#account_id DataAwsS3ControlMultiRegionAccessPoints#account_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3control_multi_region_access_points#region DataAwsS3ControlMultiRegionAccessPoints#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3ControlMultiRegionAccessPointsAccessPointsList <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsList" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoints } from '@cdktn/provider-aws'

new dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.get"></a>

```typescript
public get(index: number): DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoints } from '@cdktn/provider-aws'

new dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.publicAccessBlock">publicAccessBlock</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.regions">regions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints">DataAwsS3ControlMultiRegionAccessPointsAccessPoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `publicAccessBlock`<sup>Required</sup> <a name="publicAccessBlock" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.publicAccessBlock"></a>

```typescript
public readonly publicAccessBlock: DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList</a>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.regions"></a>

```typescript
public readonly regions: DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3ControlMultiRegionAccessPointsAccessPoints;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPoints">DataAwsS3ControlMultiRegionAccessPointsAccessPoints</a>

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoints } from '@cdktn/provider-aws'

new dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.get"></a>

```typescript
public get(index: number): DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoints } from '@cdktn/provider-aws'

new dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicAcls">blockPublicAcls</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicPolicy">blockPublicPolicy</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.ignorePublicAcls">ignorePublicAcls</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.restrictPublicBuckets">restrictPublicBuckets</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blockPublicAcls`<sup>Required</sup> <a name="blockPublicAcls" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicAcls"></a>

```typescript
public readonly blockPublicAcls: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `blockPublicPolicy`<sup>Required</sup> <a name="blockPublicPolicy" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.blockPublicPolicy"></a>

```typescript
public readonly blockPublicPolicy: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ignorePublicAcls`<sup>Required</sup> <a name="ignorePublicAcls" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.ignorePublicAcls"></a>

```typescript
public readonly ignorePublicAcls: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `restrictPublicBuckets`<sup>Required</sup> <a name="restrictPublicBuckets" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.restrictPublicBuckets"></a>

```typescript
public readonly restrictPublicBuckets: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlockOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock">DataAwsS3ControlMultiRegionAccessPointsAccessPointsPublicAccessBlock</a>

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoints } from '@cdktn/provider-aws'

new dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.get"></a>

```typescript
public get(index: number): DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference <a name="DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer"></a>

```typescript
import { dataAwsS3ControlMultiRegionAccessPoints } from '@cdktn/provider-aws'

new dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucketAccountId">bucketAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `bucketAccountId`<sup>Required</sup> <a name="bucketAccountId" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.bucketAccountId"></a>

```typescript
public readonly bucketAccountId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3ControlMultiRegionAccessPoints.DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions">DataAwsS3ControlMultiRegionAccessPointsAccessPointsRegions</a>

---



