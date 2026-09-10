# `dataAwsAccountaccessEntitlements` Submodule <a name="`dataAwsAccountaccessEntitlements` Submodule" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAccountaccessEntitlements <a name="DataAwsAccountaccessEntitlements" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/accountaccess_entitlements aws_accountaccess_entitlements}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements(scope: Construct, id: string, config: DataAwsAccountaccessEntitlementsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig">DataAwsAccountaccessEntitlementsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig">DataAwsAccountaccessEntitlementsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsAccountaccessEntitlementsFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.putFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsAccountaccessEntitlements resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isConstruct"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformElement"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformDataSource"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsAccountaccessEntitlements resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsAccountaccessEntitlements to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsAccountaccessEntitlements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/accountaccess_entitlements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsAccountaccessEntitlements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.entitlements">entitlements</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList">DataAwsAccountaccessEntitlementsEntitlementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList">DataAwsAccountaccessEntitlementsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.applicationArnInput">applicationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.filterInput">filterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.entitlements"></a>

```typescript
public readonly entitlements: DataAwsAccountaccessEntitlementsEntitlementsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList">DataAwsAccountaccessEntitlementsEntitlementsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.filter"></a>

```typescript
public readonly filter: DataAwsAccountaccessEntitlementsFilterList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList">DataAwsAccountaccessEntitlementsFilterList</a>

---

##### `applicationArnInput`<sup>Optional</sup> <a name="applicationArnInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.applicationArnInput"></a>

```typescript
public readonly applicationArnInput: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsAccountaccessEntitlementsFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlements.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAccountaccessEntitlementsConfig <a name="DataAwsAccountaccessEntitlementsConfig" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

const dataAwsAccountaccessEntitlementsConfig: dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.applicationArn">applicationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/accountaccess_entitlements#application_arn DataAwsAccountaccessEntitlements#application_arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.filter">filter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/accountaccess_entitlements#application_arn DataAwsAccountaccessEntitlements#application_arn}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsAccountaccessEntitlementsFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/accountaccess_entitlements#filter DataAwsAccountaccessEntitlements#filter}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/accountaccess_entitlements#region DataAwsAccountaccessEntitlements#region}

---

### DataAwsAccountaccessEntitlementsEntitlements <a name="DataAwsAccountaccessEntitlementsEntitlements" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlements.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

const dataAwsAccountaccessEntitlementsEntitlements: dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlements = { ... }
```


### DataAwsAccountaccessEntitlementsEntitlementsEntitlement <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlement" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

const dataAwsAccountaccessEntitlementsEntitlementsEntitlement: dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement = { ... }
```


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

const dataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole: dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole = { ... }
```


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

const dataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal: dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal = { ... }
```


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

const dataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter: dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter = { ... }
```


### DataAwsAccountaccessEntitlementsFilter <a name="DataAwsAccountaccessEntitlementsFilter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

const dataAwsAccountaccessEntitlementsFilter: dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter.property.principalRole">principalRole</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>[]</code> | principal_role block. |

---

##### `principalRole`<sup>Optional</sup> <a name="principalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter.property.principalRole"></a>

```typescript
public readonly principalRole: IResolvable | DataAwsAccountaccessEntitlementsFilterPrincipalRole[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>[]

principal_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/accountaccess_entitlements#principal_role DataAwsAccountaccessEntitlements#principal_role}

---

### DataAwsAccountaccessEntitlementsFilterPrincipalRole <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

const dataAwsAccountaccessEntitlementsFilterPrincipalRole: dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/accountaccess_entitlements#account_id DataAwsAccountaccessEntitlements#account_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.principal">principal</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>[]</code> | principal block. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/accountaccess_entitlements#role_arn DataAwsAccountaccessEntitlements#role_arn}. |

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/accountaccess_entitlements#account_id DataAwsAccountaccessEntitlements#account_id}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.principal"></a>

```typescript
public readonly principal: IResolvable | DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>[]

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/accountaccess_entitlements#principal DataAwsAccountaccessEntitlements#principal}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/accountaccess_entitlements#role_arn DataAwsAccountaccessEntitlements#role_arn}.

---

### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

const dataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal: dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal.property.identityCenter">identityCenter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>[]</code> | identity_center block. |

---

##### `identityCenter`<sup>Optional</sup> <a name="identityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal.property.identityCenter"></a>

```typescript
public readonly identityCenter: IResolvable | DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>[]

identity_center block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/accountaccess_entitlements#identity_center DataAwsAccountaccessEntitlements#identity_center}

---

### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

const dataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter: dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/accountaccess_entitlements#group_id DataAwsAccountaccessEntitlements#group_id}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.property.userId">userId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/accountaccess_entitlements#user_id DataAwsAccountaccessEntitlements#user_id}. |

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/accountaccess_entitlements#group_id DataAwsAccountaccessEntitlements#group_id}.

---

##### `userId`<sup>Optional</sup> <a name="userId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.64.0/docs/data-sources/accountaccess_entitlements#user_id DataAwsAccountaccessEntitlements#user_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsAccountaccessEntitlementsEntitlementsEntitlementList <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.get"></a>

```typescript
public get(index: number): DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.principalRole">principalRole</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement">DataAwsAccountaccessEntitlementsEntitlementsEntitlement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalRole`<sup>Required</sup> <a name="principalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.principalRole"></a>

```typescript
public readonly principalRole: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAccountaccessEntitlementsEntitlementsEntitlement;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlement">DataAwsAccountaccessEntitlementsEntitlementsEntitlement</a>

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.get"></a>

```typescript
public get(index: number): DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.principal"></a>

```typescript
public readonly principal: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRole</a>

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.get"></a>

```typescript
public get(index: number): DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenter</a>

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.get"></a>

```typescript
public get(index: number): DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.identityCenter">identityCenter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityCenter`<sup>Required</sup> <a name="identityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.identityCenter"></a>

```typescript
public readonly identityCenter: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalIdentityCenterList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsEntitlementsEntitlementPrincipalRolePrincipal</a>

---


### DataAwsAccountaccessEntitlementsEntitlementsList <a name="DataAwsAccountaccessEntitlementsEntitlementsList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.get"></a>

```typescript
public get(index: number): DataAwsAccountaccessEntitlementsEntitlementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAccountaccessEntitlementsEntitlementsOutputReference <a name="DataAwsAccountaccessEntitlementsEntitlementsOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.entitlement">entitlement</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.entitlementId">entitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlements">DataAwsAccountaccessEntitlementsEntitlements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `entitlement`<sup>Required</sup> <a name="entitlement" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.entitlement"></a>

```typescript
public readonly entitlement: DataAwsAccountaccessEntitlementsEntitlementsEntitlementList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsEntitlementList">DataAwsAccountaccessEntitlementsEntitlementsEntitlementList</a>

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.entitlementId"></a>

```typescript
public readonly entitlementId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAccountaccessEntitlementsEntitlements;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsEntitlements">DataAwsAccountaccessEntitlementsEntitlements</a>

---


### DataAwsAccountaccessEntitlementsFilterList <a name="DataAwsAccountaccessEntitlementsFilterList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.get"></a>

```typescript
public get(index: number): DataAwsAccountaccessEntitlementsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsAccountaccessEntitlementsFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>[]

---


### DataAwsAccountaccessEntitlementsFilterOutputReference <a name="DataAwsAccountaccessEntitlementsFilterOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.putPrincipalRole">putPrincipalRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resetPrincipalRole">resetPrincipalRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipalRole` <a name="putPrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.putPrincipalRole"></a>

```typescript
public putPrincipalRole(value: IResolvable | DataAwsAccountaccessEntitlementsFilterPrincipalRole[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.putPrincipalRole.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>[]

---

##### `resetPrincipalRole` <a name="resetPrincipalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.resetPrincipalRole"></a>

```typescript
public resetPrincipalRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.principalRole">principalRole</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList">DataAwsAccountaccessEntitlementsFilterPrincipalRoleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.principalRoleInput">principalRoleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalRole`<sup>Required</sup> <a name="principalRole" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.principalRole"></a>

```typescript
public readonly principalRole: DataAwsAccountaccessEntitlementsFilterPrincipalRoleList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList">DataAwsAccountaccessEntitlementsFilterPrincipalRoleList</a>

---

##### `principalRoleInput`<sup>Optional</sup> <a name="principalRoleInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.principalRoleInput"></a>

```typescript
public readonly principalRoleInput: IResolvable | DataAwsAccountaccessEntitlementsFilterPrincipalRole[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsAccountaccessEntitlementsFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilter">DataAwsAccountaccessEntitlementsFilter</a>

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRoleList <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRoleList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.get"></a>

```typescript
public get(index: number): DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsAccountaccessEntitlementsFilterPrincipalRole[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>[]

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipal` <a name="putPrincipal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.putPrincipal"></a>

```typescript
public putPrincipal(value: IResolvable | DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.putPrincipal.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.principalInput">principalInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.principal"></a>

```typescript
public readonly principal: DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: IResolvable | DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>[]

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsAccountaccessEntitlementsFilterPrincipalRole;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRole">DataAwsAccountaccessEntitlementsFilterPrincipalRole</a>

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.get"></a>

```typescript
public get(index: number): DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>[]

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resetUserId">resetUserId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupId` <a name="resetGroupId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetUserId` <a name="resetUserId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.resetUserId"></a>

```typescript
public resetUserId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.get"></a>

```typescript
public get(index: number): DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>[]

---


### DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference <a name="DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer"></a>

```typescript
import { dataAwsAccountaccessEntitlements } from '@cdktn/provider-aws'

new dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.putIdentityCenter">putIdentityCenter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resetIdentityCenter">resetIdentityCenter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdentityCenter` <a name="putIdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.putIdentityCenter"></a>

```typescript
public putIdentityCenter(value: IResolvable | DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.putIdentityCenter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>[]

---

##### `resetIdentityCenter` <a name="resetIdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.resetIdentityCenter"></a>

```typescript
public resetIdentityCenter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.identityCenter">identityCenter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.identityCenterInput">identityCenterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityCenter`<sup>Required</sup> <a name="identityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.identityCenter"></a>

```typescript
public readonly identityCenter: DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenterList</a>

---

##### `identityCenterInput`<sup>Optional</sup> <a name="identityCenterInput" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.identityCenterInput"></a>

```typescript
public readonly identityCenterInput: IResolvable | DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalIdentityCenter</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsAccountaccessEntitlements.DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal">DataAwsAccountaccessEntitlementsFilterPrincipalRolePrincipal</a>

---



