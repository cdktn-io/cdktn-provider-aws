# `dataAwsObservabilityadminDatasetIntegration` Submodule <a name="`dataAwsObservabilityadminDatasetIntegration` Submodule" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsObservabilityadminDatasetIntegration <a name="DataAwsObservabilityadminDatasetIntegration" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/observabilityadmin_dataset_integration aws_observabilityadmin_dataset_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.Initializer"></a>

```typescript
import { dataAwsObservabilityadminDatasetIntegration } from '@cdktn/provider-aws'

new dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration(scope: Construct, id: string, config?: DataAwsObservabilityadminDatasetIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig">DataAwsObservabilityadminDatasetIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig">DataAwsObservabilityadminDatasetIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsObservabilityadminDatasetIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.isConstruct"></a>

```typescript
import { dataAwsObservabilityadminDatasetIntegration } from '@cdktn/provider-aws'

dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.isTerraformElement"></a>

```typescript
import { dataAwsObservabilityadminDatasetIntegration } from '@cdktn/provider-aws'

dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.isTerraformDataSource"></a>

```typescript
import { dataAwsObservabilityadminDatasetIntegration } from '@cdktn/provider-aws'

dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.generateConfigForImport"></a>

```typescript
import { dataAwsObservabilityadminDatasetIntegration } from '@cdktn/provider-aws'

dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsObservabilityadminDatasetIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsObservabilityadminDatasetIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsObservabilityadminDatasetIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/observabilityadmin_dataset_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsObservabilityadminDatasetIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsObservabilityadminDatasetIntegrationConfig <a name="DataAwsObservabilityadminDatasetIntegrationConfig" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig.Initializer"></a>

```typescript
import { dataAwsObservabilityadminDatasetIntegration } from '@cdktn/provider-aws'

const dataAwsObservabilityadminDatasetIntegrationConfig: dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsObservabilityadminDatasetIntegration.DataAwsObservabilityadminDatasetIntegrationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/observabilityadmin_dataset_integration#region DataAwsObservabilityadminDatasetIntegration#region}

---



