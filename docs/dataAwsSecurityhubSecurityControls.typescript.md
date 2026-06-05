# `dataAwsSecurityhubSecurityControls` Submodule <a name="`dataAwsSecurityhubSecurityControls` Submodule" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSecurityhubSecurityControls <a name="DataAwsSecurityhubSecurityControls" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/securityhub_security_controls aws_securityhub_security_controls}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer"></a>

```typescript
import { dataAwsSecurityhubSecurityControls } from '@cdktn/provider-aws'

new dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls(scope: Construct, id: string, config?: DataAwsSecurityhubSecurityControlsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig">DataAwsSecurityhubSecurityControlsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig">DataAwsSecurityhubSecurityControlsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.resetStandardsArn">resetStandardsArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStandardsArn` <a name="resetStandardsArn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.resetStandardsArn"></a>

```typescript
public resetStandardsArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsSecurityhubSecurityControls resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isConstruct"></a>

```typescript
import { dataAwsSecurityhubSecurityControls } from '@cdktn/provider-aws'

dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformElement"></a>

```typescript
import { dataAwsSecurityhubSecurityControls } from '@cdktn/provider-aws'

dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformDataSource"></a>

```typescript
import { dataAwsSecurityhubSecurityControls } from '@cdktn/provider-aws'

dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport"></a>

```typescript
import { dataAwsSecurityhubSecurityControls } from '@cdktn/provider-aws'

dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsSecurityhubSecurityControls resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSecurityhubSecurityControls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSecurityhubSecurityControls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/securityhub_security_controls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSecurityhubSecurityControls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.securityControlDefinitions">securityControlDefinitions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList">DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.standardsArnInput">standardsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.standardsArn">standardsArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `securityControlDefinitions`<sup>Required</sup> <a name="securityControlDefinitions" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.securityControlDefinitions"></a>

```typescript
public readonly securityControlDefinitions: DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList">DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `standardsArnInput`<sup>Optional</sup> <a name="standardsArnInput" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.standardsArnInput"></a>

```typescript
public readonly standardsArnInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `standardsArn`<sup>Required</sup> <a name="standardsArn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.standardsArn"></a>

```typescript
public readonly standardsArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControls.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSecurityhubSecurityControlsConfig <a name="DataAwsSecurityhubSecurityControlsConfig" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.Initializer"></a>

```typescript
import { dataAwsSecurityhubSecurityControls } from '@cdktn/provider-aws'

const dataAwsSecurityhubSecurityControlsConfig: dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.standardsArn">standardsArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/securityhub_security_controls#standards_arn DataAwsSecurityhubSecurityControls#standards_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/securityhub_security_controls#region DataAwsSecurityhubSecurityControls#region}

---

##### `standardsArn`<sup>Optional</sup> <a name="standardsArn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsConfig.property.standardsArn"></a>

```typescript
public readonly standardsArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.49.0/docs/data-sources/securityhub_security_controls#standards_arn DataAwsSecurityhubSecurityControls#standards_arn}.

---

### DataAwsSecurityhubSecurityControlsSecurityControlDefinitions <a name="DataAwsSecurityhubSecurityControlsSecurityControlDefinitions" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitions.Initializer"></a>

```typescript
import { dataAwsSecurityhubSecurityControls } from '@cdktn/provider-aws'

const dataAwsSecurityhubSecurityControlsSecurityControlDefinitions: dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitions = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList <a name="DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer"></a>

```typescript
import { dataAwsSecurityhubSecurityControls } from '@cdktn/provider-aws'

new dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.get"></a>

```typescript
public get(index: number): DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference <a name="DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer"></a>

```typescript
import { dataAwsSecurityhubSecurityControls } from '@cdktn/provider-aws'

new dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.currentRegionAvailability">currentRegionAvailability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.customizableProperties">customizableProperties</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.remediationUrl">remediationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.securityControlId">securityControlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.severityRating">severityRating</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitions">DataAwsSecurityhubSecurityControlsSecurityControlDefinitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentRegionAvailability`<sup>Required</sup> <a name="currentRegionAvailability" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.currentRegionAvailability"></a>

```typescript
public readonly currentRegionAvailability: string;
```

- *Type:* string

---

##### `customizableProperties`<sup>Required</sup> <a name="customizableProperties" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.customizableProperties"></a>

```typescript
public readonly customizableProperties: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `remediationUrl`<sup>Required</sup> <a name="remediationUrl" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.remediationUrl"></a>

```typescript
public readonly remediationUrl: string;
```

- *Type:* string

---

##### `securityControlId`<sup>Required</sup> <a name="securityControlId" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.securityControlId"></a>

```typescript
public readonly securityControlId: string;
```

- *Type:* string

---

##### `severityRating`<sup>Required</sup> <a name="severityRating" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.severityRating"></a>

```typescript
public readonly severityRating: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSecurityhubSecurityControlsSecurityControlDefinitions;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSecurityhubSecurityControls.DataAwsSecurityhubSecurityControlsSecurityControlDefinitions">DataAwsSecurityhubSecurityControlsSecurityControlDefinitions</a>

---



