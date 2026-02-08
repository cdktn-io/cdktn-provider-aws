# `dataAwsS3BucketReplicationConfiguration` Submodule <a name="`dataAwsS3BucketReplicationConfiguration` Submodule" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3BucketReplicationConfiguration <a name="DataAwsS3BucketReplicationConfiguration" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3_bucket_replication_configuration aws_s3_bucket_replication_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration(scope: Construct, id: string, config: DataAwsS3BucketReplicationConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig">DataAwsS3BucketReplicationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig">DataAwsS3BucketReplicationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsS3BucketReplicationConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isConstruct"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isTerraformElement"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isTerraformDataSource"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.generateConfigForImport"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsS3BucketReplicationConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsS3BucketReplicationConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsS3BucketReplicationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3_bucket_replication_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsS3BucketReplicationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.rule">rule</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList">DataAwsS3BucketReplicationConfigurationRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.rule"></a>

```typescript
public readonly rule: DataAwsS3BucketReplicationConfigurationRuleList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList">DataAwsS3BucketReplicationConfigurationRuleList</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3BucketReplicationConfigurationConfig <a name="DataAwsS3BucketReplicationConfigurationConfig" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

const dataAwsS3BucketReplicationConfigurationConfig: dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3_bucket_replication_configuration#bucket DataAwsS3BucketReplicationConfiguration#bucket}. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3_bucket_replication_configuration#bucket DataAwsS3BucketReplicationConfiguration#bucket}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/s3_bucket_replication_configuration#region DataAwsS3BucketReplicationConfiguration#region}

---

### DataAwsS3BucketReplicationConfigurationRule <a name="DataAwsS3BucketReplicationConfigurationRule" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRule.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

const dataAwsS3BucketReplicationConfigurationRule: dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRule = { ... }
```


### DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication <a name="DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

const dataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication: dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication = { ... }
```


### DataAwsS3BucketReplicationConfigurationRuleDestination <a name="DataAwsS3BucketReplicationConfigurationRuleDestination" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestination.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

const dataAwsS3BucketReplicationConfigurationRuleDestination: dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestination = { ... }
```


### DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

const dataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation: dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation = { ... }
```


### DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

const dataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration: dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration = { ... }
```


### DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

const dataAwsS3BucketReplicationConfigurationRuleDestinationMetrics: dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics = { ... }
```


### DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

const dataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold: dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold = { ... }
```


### DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

const dataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime: dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime = { ... }
```


### DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

const dataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime: dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime = { ... }
```


### DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication <a name="DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

const dataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication: dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication = { ... }
```


### DataAwsS3BucketReplicationConfigurationRuleFilter <a name="DataAwsS3BucketReplicationConfigurationRuleFilter" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilter.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

const dataAwsS3BucketReplicationConfigurationRuleFilter: dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilter = { ... }
```


### DataAwsS3BucketReplicationConfigurationRuleFilterAnd <a name="DataAwsS3BucketReplicationConfigurationRuleFilterAnd" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAnd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAnd.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

const dataAwsS3BucketReplicationConfigurationRuleFilterAnd: dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAnd = { ... }
```


### DataAwsS3BucketReplicationConfigurationRuleFilterAndTag <a name="DataAwsS3BucketReplicationConfigurationRuleFilterAndTag" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTag.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

const dataAwsS3BucketReplicationConfigurationRuleFilterAndTag: dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTag = { ... }
```


### DataAwsS3BucketReplicationConfigurationRuleFilterTag <a name="DataAwsS3BucketReplicationConfigurationRuleFilterTag" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTag.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

const dataAwsS3BucketReplicationConfigurationRuleFilterTag: dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTag = { ... }
```


### DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria <a name="DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

const dataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria: dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria = { ... }
```


### DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications <a name="DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

const dataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications: dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications = { ... }
```


### DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects <a name="DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

const dataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects: dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList <a name="DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.get"></a>

```typescript
public get(index: number): DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication">DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication">DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplication</a>

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.get"></a>

```typescript
public get(index: number): DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation">DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslation</a>

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.replicaKmsKeyId">replicaKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replicaKmsKeyId`<sup>Required</sup> <a name="replicaKmsKeyId" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.replicaKmsKeyId"></a>

```typescript
public readonly replicaKmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration">DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfiguration</a>

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationList <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.get"></a>

```typescript
public get(index: number): DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.get"></a>

```typescript
public get(index: number): DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold">DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThreshold</a>

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.get"></a>

```typescript
public get(index: number): DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.eventThreshold">eventThreshold</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList">DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics">DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `eventThreshold`<sup>Required</sup> <a name="eventThreshold" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.eventThreshold"></a>

```typescript
public readonly eventThreshold: DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList">DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsEventThresholdList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics">DataAwsS3BucketReplicationConfigurationRuleDestinationMetrics</a>

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.accessControlTranslation">accessControlTranslation</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList">DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList">DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.metrics">metrics</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList">DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.replicationTime">replicationTime</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList">DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestination">DataAwsS3BucketReplicationConfigurationRuleDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessControlTranslation`<sup>Required</sup> <a name="accessControlTranslation" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.accessControlTranslation"></a>

```typescript
public readonly accessControlTranslation: DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList">DataAwsS3BucketReplicationConfigurationRuleDestinationAccessControlTranslationList</a>

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList">DataAwsS3BucketReplicationConfigurationRuleDestinationEncryptionConfigurationList</a>

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.metrics"></a>

```typescript
public readonly metrics: DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList">DataAwsS3BucketReplicationConfigurationRuleDestinationMetricsList</a>

---

##### `replicationTime`<sup>Required</sup> <a name="replicationTime" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.replicationTime"></a>

```typescript
public readonly replicationTime: DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList">DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList</a>

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3BucketReplicationConfigurationRuleDestination;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestination">DataAwsS3BucketReplicationConfigurationRuleDestination</a>

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.get"></a>

```typescript
public get(index: number): DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.time">time</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList">DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime">DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.time"></a>

```typescript
public readonly time: DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList">DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime">DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTime</a>

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.get"></a>

```typescript
public get(index: number): DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime">DataAwsS3BucketReplicationConfigurationRuleDestinationReplicationTimeTime</a>

---


### DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList <a name="DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.get"></a>

```typescript
public get(index: number): DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication">DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication">DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplication</a>

---


### DataAwsS3BucketReplicationConfigurationRuleFilterAndList <a name="DataAwsS3BucketReplicationConfigurationRuleFilterAndList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.get"></a>

```typescript
public get(index: number): DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList">DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAnd">DataAwsS3BucketReplicationConfigurationRuleFilterAnd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.tag"></a>

```typescript
public readonly tag: DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList">DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3BucketReplicationConfigurationRuleFilterAnd;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAnd">DataAwsS3BucketReplicationConfigurationRuleFilterAnd</a>

---


### DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList <a name="DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.get"></a>

```typescript
public get(index: number): DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTag">DataAwsS3BucketReplicationConfigurationRuleFilterAndTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3BucketReplicationConfigurationRuleFilterAndTag;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndTag">DataAwsS3BucketReplicationConfigurationRuleFilterAndTag</a>

---


### DataAwsS3BucketReplicationConfigurationRuleFilterList <a name="DataAwsS3BucketReplicationConfigurationRuleFilterList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.get"></a>

```typescript
public get(index: number): DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.and">and</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList">DataAwsS3BucketReplicationConfigurationRuleFilterAndList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.tag">tag</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList">DataAwsS3BucketReplicationConfigurationRuleFilterTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilter">DataAwsS3BucketReplicationConfigurationRuleFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.and"></a>

```typescript
public readonly and: DataAwsS3BucketReplicationConfigurationRuleFilterAndList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterAndList">DataAwsS3BucketReplicationConfigurationRuleFilterAndList</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.tag"></a>

```typescript
public readonly tag: DataAwsS3BucketReplicationConfigurationRuleFilterTagList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList">DataAwsS3BucketReplicationConfigurationRuleFilterTagList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3BucketReplicationConfigurationRuleFilter;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilter">DataAwsS3BucketReplicationConfigurationRuleFilter</a>

---


### DataAwsS3BucketReplicationConfigurationRuleFilterTagList <a name="DataAwsS3BucketReplicationConfigurationRuleFilterTagList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.get"></a>

```typescript
public get(index: number): DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTag">DataAwsS3BucketReplicationConfigurationRuleFilterTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3BucketReplicationConfigurationRuleFilterTag;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterTag">DataAwsS3BucketReplicationConfigurationRuleFilterTag</a>

---


### DataAwsS3BucketReplicationConfigurationRuleList <a name="DataAwsS3BucketReplicationConfigurationRuleList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.get"></a>

```typescript
public get(index: number): DataAwsS3BucketReplicationConfigurationRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3BucketReplicationConfigurationRuleOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.deleteMarkerReplication">deleteMarkerReplication</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList">DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList">DataAwsS3BucketReplicationConfigurationRuleDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.existingObjectReplication">existingObjectReplication</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList">DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList">DataAwsS3BucketReplicationConfigurationRuleFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.sourceSelectionCriteria">sourceSelectionCriteria</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRule">DataAwsS3BucketReplicationConfigurationRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteMarkerReplication`<sup>Required</sup> <a name="deleteMarkerReplication" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.deleteMarkerReplication"></a>

```typescript
public readonly deleteMarkerReplication: DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList">DataAwsS3BucketReplicationConfigurationRuleDeleteMarkerReplicationList</a>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.destination"></a>

```typescript
public readonly destination: DataAwsS3BucketReplicationConfigurationRuleDestinationList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleDestinationList">DataAwsS3BucketReplicationConfigurationRuleDestinationList</a>

---

##### `existingObjectReplication`<sup>Required</sup> <a name="existingObjectReplication" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.existingObjectReplication"></a>

```typescript
public readonly existingObjectReplication: DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList">DataAwsS3BucketReplicationConfigurationRuleExistingObjectReplicationList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.filter"></a>

```typescript
public readonly filter: DataAwsS3BucketReplicationConfigurationRuleFilterList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleFilterList">DataAwsS3BucketReplicationConfigurationRuleFilterList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `sourceSelectionCriteria`<sup>Required</sup> <a name="sourceSelectionCriteria" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.sourceSelectionCriteria"></a>

```typescript
public readonly sourceSelectionCriteria: DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3BucketReplicationConfigurationRule;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRule">DataAwsS3BucketReplicationConfigurationRule</a>

---


### DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList <a name="DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.get"></a>

```typescript
public get(index: number): DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.replicaModifications">replicaModifications</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjects">sseKmsEncryptedObjects</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `replicaModifications`<sup>Required</sup> <a name="replicaModifications" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.replicaModifications"></a>

```typescript
public readonly replicaModifications: DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList</a>

---

##### `sseKmsEncryptedObjects`<sup>Required</sup> <a name="sseKmsEncryptedObjects" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.sseKmsEncryptedObjects"></a>

```typescript
public readonly sseKmsEncryptedObjects: DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteria</a>

---


### DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList <a name="DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.get"></a>

```typescript
public get(index: number): DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaReplicaModifications</a>

---


### DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList <a name="DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.get"></a>

```typescript
public get(index: number): DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference <a name="DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer"></a>

```typescript
import { dataAwsS3BucketReplicationConfiguration } from '@cdktn/provider-aws'

new dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjectsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3BucketReplicationConfiguration.DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects">DataAwsS3BucketReplicationConfigurationRuleSourceSelectionCriteriaSseKmsEncryptedObjects</a>

---



