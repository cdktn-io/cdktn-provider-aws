# `dataAwsResourcegroupstaggingapiRequiredTags` Submodule <a name="`dataAwsResourcegroupstaggingapiRequiredTags` Submodule" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsResourcegroupstaggingapiRequiredTags <a name="DataAwsResourcegroupstaggingapiRequiredTags" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/resourcegroupstaggingapi_required_tags aws_resourcegroupstaggingapi_required_tags}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer"></a>

```typescript
import { dataAwsResourcegroupstaggingapiRequiredTags } from '@cdktn/provider-aws'

new dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags(scope: Construct, id: string, config?: DataAwsResourcegroupstaggingapiRequiredTagsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig">DataAwsResourcegroupstaggingapiRequiredTagsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig">DataAwsResourcegroupstaggingapiRequiredTagsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsResourcegroupstaggingapiRequiredTags resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isConstruct"></a>

```typescript
import { dataAwsResourcegroupstaggingapiRequiredTags } from '@cdktn/provider-aws'

dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformElement"></a>

```typescript
import { dataAwsResourcegroupstaggingapiRequiredTags } from '@cdktn/provider-aws'

dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformDataSource"></a>

```typescript
import { dataAwsResourcegroupstaggingapiRequiredTags } from '@cdktn/provider-aws'

dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport"></a>

```typescript
import { dataAwsResourcegroupstaggingapiRequiredTags } from '@cdktn/provider-aws'

dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsResourcegroupstaggingapiRequiredTags resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsResourcegroupstaggingapiRequiredTags to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsResourcegroupstaggingapiRequiredTags that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/resourcegroupstaggingapi_required_tags#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsResourcegroupstaggingapiRequiredTags to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.requiredTags">requiredTags</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList">DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `requiredTags`<sup>Required</sup> <a name="requiredTags" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.requiredTags"></a>

```typescript
public readonly requiredTags: DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList">DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTags.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsResourcegroupstaggingapiRequiredTagsConfig <a name="DataAwsResourcegroupstaggingapiRequiredTagsConfig" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.Initializer"></a>

```typescript
import { dataAwsResourcegroupstaggingapiRequiredTags } from '@cdktn/provider-aws'

const dataAwsResourcegroupstaggingapiRequiredTagsConfig: dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/data-sources/resourcegroupstaggingapi_required_tags#region DataAwsResourcegroupstaggingapiRequiredTags#region}

---

### DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags <a name="DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags.Initializer"></a>

```typescript
import { dataAwsResourcegroupstaggingapiRequiredTags } from '@cdktn/provider-aws'

const dataAwsResourcegroupstaggingapiRequiredTagsRequiredTags: dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList <a name="DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer"></a>

```typescript
import { dataAwsResourcegroupstaggingapiRequiredTags } from '@cdktn/provider-aws'

new dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.get"></a>

```typescript
public get(index: number): DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference <a name="DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsResourcegroupstaggingapiRequiredTags } from '@cdktn/provider-aws'

new dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.cloudFormationResourceTypes">cloudFormationResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.reportingTagKeys">reportingTagKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags">DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudFormationResourceTypes`<sup>Required</sup> <a name="cloudFormationResourceTypes" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.cloudFormationResourceTypes"></a>

```typescript
public readonly cloudFormationResourceTypes: string[];
```

- *Type:* string[]

---

##### `reportingTagKeys`<sup>Required</sup> <a name="reportingTagKeys" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.reportingTagKeys"></a>

```typescript
public readonly reportingTagKeys: string[];
```

- *Type:* string[]

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResourcegroupstaggingapiRequiredTags.DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags">DataAwsResourcegroupstaggingapiRequiredTagsRequiredTags</a>

---



