# `dataAwsOdbDbServers` Submodule <a name="`dataAwsOdbDbServers` Submodule" id="@cdktf/provider-aws.dataAwsOdbDbServers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOdbDbServers <a name="DataAwsOdbDbServers" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/data-sources/odb_db_servers aws_odb_db_servers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer"></a>

```typescript
import { dataAwsOdbDbServers } from '@cdktf/provider-aws'

new dataAwsOdbDbServers.DataAwsOdbDbServers(scope: Construct, id: string, config: DataAwsOdbDbServersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig">DataAwsOdbDbServersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig">DataAwsOdbDbServersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsOdbDbServers resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.isConstruct"></a>

```typescript
import { dataAwsOdbDbServers } from '@cdktf/provider-aws'

dataAwsOdbDbServers.DataAwsOdbDbServers.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.isTerraformElement"></a>

```typescript
import { dataAwsOdbDbServers } from '@cdktf/provider-aws'

dataAwsOdbDbServers.DataAwsOdbDbServers.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.isTerraformDataSource"></a>

```typescript
import { dataAwsOdbDbServers } from '@cdktf/provider-aws'

dataAwsOdbDbServers.DataAwsOdbDbServers.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.generateConfigForImport"></a>

```typescript
import { dataAwsOdbDbServers } from '@cdktf/provider-aws'

dataAwsOdbDbServers.DataAwsOdbDbServers.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsOdbDbServers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOdbDbServers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOdbDbServers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/data-sources/odb_db_servers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsOdbDbServers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.dbServers">dbServers</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList">DataAwsOdbDbServersDbServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.cloudExadataInfrastructureIdInput">cloudExadataInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.dbServers"></a>

```typescript
public readonly dbServers: DataAwsOdbDbServersDbServersList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList">DataAwsOdbDbServersDbServersList</a>

---

##### `cloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="cloudExadataInfrastructureIdInput" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.cloudExadataInfrastructureIdInput"></a>

```typescript
public readonly cloudExadataInfrastructureIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServers.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOdbDbServersConfig <a name="DataAwsOdbDbServersConfig" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.Initializer"></a>

```typescript
import { dataAwsOdbDbServers } from '@cdktf/provider-aws'

const dataAwsOdbDbServersConfig: dataAwsOdbDbServers.DataAwsOdbDbServersConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>string</code> | The cloud exadata infrastructure ID. Mandatory field. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.cloudExadataInfrastructureId"></a>

```typescript
public readonly cloudExadataInfrastructureId: string;
```

- *Type:* string

The cloud exadata infrastructure ID. Mandatory field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/data-sources/odb_db_servers#cloud_exadata_infrastructure_id DataAwsOdbDbServers#cloud_exadata_infrastructure_id}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.16.0/docs/data-sources/odb_db_servers#region DataAwsOdbDbServers#region}

---

### DataAwsOdbDbServersDbServers <a name="DataAwsOdbDbServersDbServers" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServers.Initializer"></a>

```typescript
import { dataAwsOdbDbServers } from '@cdktf/provider-aws'

const dataAwsOdbDbServersDbServers: dataAwsOdbDbServers.DataAwsOdbDbServersDbServers = { ... }
```


### DataAwsOdbDbServersDbServersDbServerPatchingDetails <a name="DataAwsOdbDbServersDbServersDbServerPatchingDetails" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetails.Initializer"></a>

```typescript
import { dataAwsOdbDbServers } from '@cdktf/provider-aws'

const dataAwsOdbDbServersDbServersDbServerPatchingDetails: dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsOdbDbServersDbServersDbServerPatchingDetailsList <a name="DataAwsOdbDbServersDbServersDbServerPatchingDetailsList" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.Initializer"></a>

```typescript
import { dataAwsOdbDbServers } from '@cdktf/provider-aws'

new dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.get"></a>

```typescript
public get(index: number): DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference <a name="DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.Initializer"></a>

```typescript
import { dataAwsOdbDbServers } from '@cdktf/provider-aws'

new dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration">estimatedPatchDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.patchingStatus">patchingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.timePatchingEnded">timePatchingEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.timePatchingStarted">timePatchingStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetails">DataAwsOdbDbServersDbServersDbServerPatchingDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `estimatedPatchDuration`<sup>Required</sup> <a name="estimatedPatchDuration" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration"></a>

```typescript
public readonly estimatedPatchDuration: number;
```

- *Type:* number

---

##### `patchingStatus`<sup>Required</sup> <a name="patchingStatus" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.patchingStatus"></a>

```typescript
public readonly patchingStatus: string;
```

- *Type:* string

---

##### `timePatchingEnded`<sup>Required</sup> <a name="timePatchingEnded" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.timePatchingEnded"></a>

```typescript
public readonly timePatchingEnded: string;
```

- *Type:* string

---

##### `timePatchingStarted`<sup>Required</sup> <a name="timePatchingStarted" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.timePatchingStarted"></a>

```typescript
public readonly timePatchingStarted: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsOdbDbServersDbServersDbServerPatchingDetails;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetails">DataAwsOdbDbServersDbServersDbServerPatchingDetails</a>

---


### DataAwsOdbDbServersDbServersList <a name="DataAwsOdbDbServersDbServersList" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.Initializer"></a>

```typescript
import { dataAwsOdbDbServers } from '@cdktf/provider-aws'

new dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.get"></a>

```typescript
public get(index: number): DataAwsOdbDbServersDbServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsOdbDbServersDbServersOutputReference <a name="DataAwsOdbDbServersDbServersOutputReference" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.Initializer"></a>

```typescript
import { dataAwsOdbDbServers } from '@cdktf/provider-aws'

new dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.autonomousVirtualMachineIds">autonomousVirtualMachineIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.autonomousVmClusterIds">autonomousVmClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.computeModel">computeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.dbServerPatchingDetails">dbServerPatchingDetails</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList">DataAwsOdbDbServersDbServersDbServerPatchingDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.exadataInfrastructureId">exadataInfrastructureId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.maxCpuCount">maxCpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.maxDbNodeStorageInGbs">maxDbNodeStorageInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.maxMemoryInGbs">maxMemoryInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.ocid">ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.ociResourceAnchorName">ociResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.vmClusterIds">vmClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServers">DataAwsOdbDbServersDbServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autonomousVirtualMachineIds`<sup>Required</sup> <a name="autonomousVirtualMachineIds" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.autonomousVirtualMachineIds"></a>

```typescript
public readonly autonomousVirtualMachineIds: string[];
```

- *Type:* string[]

---

##### `autonomousVmClusterIds`<sup>Required</sup> <a name="autonomousVmClusterIds" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.autonomousVmClusterIds"></a>

```typescript
public readonly autonomousVmClusterIds: string[];
```

- *Type:* string[]

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.computeModel"></a>

```typescript
public readonly computeModel: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.dbNodeStorageSizeInGbs"></a>

```typescript
public readonly dbNodeStorageSizeInGbs: number;
```

- *Type:* number

---

##### `dbServerPatchingDetails`<sup>Required</sup> <a name="dbServerPatchingDetails" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.dbServerPatchingDetails"></a>

```typescript
public readonly dbServerPatchingDetails: DataAwsOdbDbServersDbServersDbServerPatchingDetailsList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersDbServerPatchingDetailsList">DataAwsOdbDbServersDbServersDbServerPatchingDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `exadataInfrastructureId`<sup>Required</sup> <a name="exadataInfrastructureId" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.exadataInfrastructureId"></a>

```typescript
public readonly exadataInfrastructureId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxCpuCount`<sup>Required</sup> <a name="maxCpuCount" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.maxCpuCount"></a>

```typescript
public readonly maxCpuCount: number;
```

- *Type:* number

---

##### `maxDbNodeStorageInGbs`<sup>Required</sup> <a name="maxDbNodeStorageInGbs" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.maxDbNodeStorageInGbs"></a>

```typescript
public readonly maxDbNodeStorageInGbs: number;
```

- *Type:* number

---

##### `maxMemoryInGbs`<sup>Required</sup> <a name="maxMemoryInGbs" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.maxMemoryInGbs"></a>

```typescript
public readonly maxMemoryInGbs: number;
```

- *Type:* number

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.memorySizeInGbs"></a>

```typescript
public readonly memorySizeInGbs: number;
```

- *Type:* number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.ocid"></a>

```typescript
public readonly ocid: string;
```

- *Type:* string

---

##### `ociResourceAnchorName`<sup>Required</sup> <a name="ociResourceAnchorName" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.ociResourceAnchorName"></a>

```typescript
public readonly ociResourceAnchorName: string;
```

- *Type:* string

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `vmClusterIds`<sup>Required</sup> <a name="vmClusterIds" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.vmClusterIds"></a>

```typescript
public readonly vmClusterIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsOdbDbServersDbServers;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsOdbDbServers.DataAwsOdbDbServersDbServers">DataAwsOdbDbServersDbServers</a>

---



