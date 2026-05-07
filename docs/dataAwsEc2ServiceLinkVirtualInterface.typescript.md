# `dataAwsEc2ServiceLinkVirtualInterface` Submodule <a name="`dataAwsEc2ServiceLinkVirtualInterface` Submodule" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2ServiceLinkVirtualInterface <a name="DataAwsEc2ServiceLinkVirtualInterface" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interface aws_ec2_service_link_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.Initializer"></a>

```typescript
import { dataAwsEc2ServiceLinkVirtualInterface } from '@cdktn/provider-aws'

new dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface(scope: Construct, id: string, config?: DataAwsEc2ServiceLinkVirtualInterfaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig">DataAwsEc2ServiceLinkVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig">DataAwsEc2ServiceLinkVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsEc2ServiceLinkVirtualInterfaceFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter">DataAwsEc2ServiceLinkVirtualInterfaceFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsEc2ServiceLinkVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isConstruct"></a>

```typescript
import { dataAwsEc2ServiceLinkVirtualInterface } from '@cdktn/provider-aws'

dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isTerraformElement"></a>

```typescript
import { dataAwsEc2ServiceLinkVirtualInterface } from '@cdktn/provider-aws'

dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isTerraformDataSource"></a>

```typescript
import { dataAwsEc2ServiceLinkVirtualInterface } from '@cdktn/provider-aws'

dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.generateConfigForImport"></a>

```typescript
import { dataAwsEc2ServiceLinkVirtualInterface } from '@cdktn/provider-aws'

dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsEc2ServiceLinkVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2ServiceLinkVirtualInterface to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2ServiceLinkVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsEc2ServiceLinkVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.configurationState">configurationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList">DataAwsEc2ServiceLinkVirtualInterfaceFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.localAddress">localAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.outpostArn">outpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.outpostId">outpostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.outpostLagId">outpostLagId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.peerAddress">peerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.peerBgpAsn">peerBgpAsn</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.vlan">vlan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter">DataAwsEc2ServiceLinkVirtualInterfaceFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configurationState`<sup>Required</sup> <a name="configurationState" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.configurationState"></a>

```typescript
public readonly configurationState: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.filter"></a>

```typescript
public readonly filter: DataAwsEc2ServiceLinkVirtualInterfaceFilterList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList">DataAwsEc2ServiceLinkVirtualInterfaceFilterList</a>

---

##### `localAddress`<sup>Required</sup> <a name="localAddress" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.localAddress"></a>

```typescript
public readonly localAddress: string;
```

- *Type:* string

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.outpostArn"></a>

```typescript
public readonly outpostArn: string;
```

- *Type:* string

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.outpostId"></a>

```typescript
public readonly outpostId: string;
```

- *Type:* string

---

##### `outpostLagId`<sup>Required</sup> <a name="outpostLagId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.outpostLagId"></a>

```typescript
public readonly outpostLagId: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `peerAddress`<sup>Required</sup> <a name="peerAddress" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.peerAddress"></a>

```typescript
public readonly peerAddress: string;
```

- *Type:* string

---

##### `peerBgpAsn`<sup>Required</sup> <a name="peerBgpAsn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.peerBgpAsn"></a>

```typescript
public readonly peerBgpAsn: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `vlan`<sup>Required</sup> <a name="vlan" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.vlan"></a>

```typescript
public readonly vlan: number;
```

- *Type:* number

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsEc2ServiceLinkVirtualInterfaceFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter">DataAwsEc2ServiceLinkVirtualInterfaceFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterface.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2ServiceLinkVirtualInterfaceConfig <a name="DataAwsEc2ServiceLinkVirtualInterfaceConfig" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.Initializer"></a>

```typescript
import { dataAwsEc2ServiceLinkVirtualInterface } from '@cdktn/provider-aws'

const dataAwsEc2ServiceLinkVirtualInterfaceConfig: dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.filter">filter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter">DataAwsEc2ServiceLinkVirtualInterfaceFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interface#id DataAwsEc2ServiceLinkVirtualInterface#id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsEc2ServiceLinkVirtualInterfaceFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter">DataAwsEc2ServiceLinkVirtualInterfaceFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interface#filter DataAwsEc2ServiceLinkVirtualInterface#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interface#id DataAwsEc2ServiceLinkVirtualInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interface#region DataAwsEc2ServiceLinkVirtualInterface#region}

---

### DataAwsEc2ServiceLinkVirtualInterfaceFilter <a name="DataAwsEc2ServiceLinkVirtualInterfaceFilter" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter.Initializer"></a>

```typescript
import { dataAwsEc2ServiceLinkVirtualInterface } from '@cdktn/provider-aws'

const dataAwsEc2ServiceLinkVirtualInterfaceFilter: dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interface#name DataAwsEc2ServiceLinkVirtualInterface#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interface#values DataAwsEc2ServiceLinkVirtualInterface#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interface#name DataAwsEc2ServiceLinkVirtualInterface#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.44.0/docs/data-sources/ec2_service_link_virtual_interface#values DataAwsEc2ServiceLinkVirtualInterface#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2ServiceLinkVirtualInterfaceFilterList <a name="DataAwsEc2ServiceLinkVirtualInterfaceFilterList" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.Initializer"></a>

```typescript
import { dataAwsEc2ServiceLinkVirtualInterface } from '@cdktn/provider-aws'

new dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.get"></a>

```typescript
public get(index: number): DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter">DataAwsEc2ServiceLinkVirtualInterfaceFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2ServiceLinkVirtualInterfaceFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter">DataAwsEc2ServiceLinkVirtualInterfaceFilter</a>[]

---


### DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference <a name="DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2ServiceLinkVirtualInterface } from '@cdktn/provider-aws'

new dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter">DataAwsEc2ServiceLinkVirtualInterfaceFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2ServiceLinkVirtualInterfaceFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsEc2ServiceLinkVirtualInterface.DataAwsEc2ServiceLinkVirtualInterfaceFilter">DataAwsEc2ServiceLinkVirtualInterfaceFilter</a>

---



