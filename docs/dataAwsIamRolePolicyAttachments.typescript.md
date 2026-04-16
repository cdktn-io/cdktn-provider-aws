# `dataAwsIamRolePolicyAttachments` Submodule <a name="`dataAwsIamRolePolicyAttachments` Submodule" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsIamRolePolicyAttachments <a name="DataAwsIamRolePolicyAttachments" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/data-sources/iam_role_policy_attachments aws_iam_role_policy_attachments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer"></a>

```typescript
import { dataAwsIamRolePolicyAttachments } from '@cdktn/provider-aws'

new dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments(scope: Construct, id: string, config: DataAwsIamRolePolicyAttachmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig">DataAwsIamRolePolicyAttachmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig">DataAwsIamRolePolicyAttachmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.resetPathPrefix">resetPathPrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetPathPrefix` <a name="resetPathPrefix" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.resetPathPrefix"></a>

```typescript
public resetPathPrefix(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsIamRolePolicyAttachments resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isConstruct"></a>

```typescript
import { dataAwsIamRolePolicyAttachments } from '@cdktn/provider-aws'

dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isTerraformElement"></a>

```typescript
import { dataAwsIamRolePolicyAttachments } from '@cdktn/provider-aws'

dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isTerraformDataSource"></a>

```typescript
import { dataAwsIamRolePolicyAttachments } from '@cdktn/provider-aws'

dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.generateConfigForImport"></a>

```typescript
import { dataAwsIamRolePolicyAttachments } from '@cdktn/provider-aws'

dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsIamRolePolicyAttachments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsIamRolePolicyAttachments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsIamRolePolicyAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/data-sources/iam_role_policy_attachments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsIamRolePolicyAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.attachedPolicies">attachedPolicies</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList">DataAwsIamRolePolicyAttachmentsAttachedPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.pathPrefixInput">pathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.roleNameInput">roleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.pathPrefix">pathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `attachedPolicies`<sup>Required</sup> <a name="attachedPolicies" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.attachedPolicies"></a>

```typescript
public readonly attachedPolicies: DataAwsIamRolePolicyAttachmentsAttachedPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList">DataAwsIamRolePolicyAttachmentsAttachedPoliciesList</a>

---

##### `pathPrefixInput`<sup>Optional</sup> <a name="pathPrefixInput" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.pathPrefixInput"></a>

```typescript
public readonly pathPrefixInput: string;
```

- *Type:* string

---

##### `roleNameInput`<sup>Optional</sup> <a name="roleNameInput" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.roleNameInput"></a>

```typescript
public readonly roleNameInput: string;
```

- *Type:* string

---

##### `pathPrefix`<sup>Required</sup> <a name="pathPrefix" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.pathPrefix"></a>

```typescript
public readonly pathPrefix: string;
```

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsIamRolePolicyAttachmentsAttachedPolicies <a name="DataAwsIamRolePolicyAttachmentsAttachedPolicies" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPolicies.Initializer"></a>

```typescript
import { dataAwsIamRolePolicyAttachments } from '@cdktn/provider-aws'

const dataAwsIamRolePolicyAttachmentsAttachedPolicies: dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPolicies = { ... }
```


### DataAwsIamRolePolicyAttachmentsConfig <a name="DataAwsIamRolePolicyAttachmentsConfig" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.Initializer"></a>

```typescript
import { dataAwsIamRolePolicyAttachments } from '@cdktn/provider-aws'

const dataAwsIamRolePolicyAttachmentsConfig: dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.roleName">roleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/data-sources/iam_role_policy_attachments#role_name DataAwsIamRolePolicyAttachments#role_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.pathPrefix">pathPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/data-sources/iam_role_policy_attachments#path_prefix DataAwsIamRolePolicyAttachments#path_prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/data-sources/iam_role_policy_attachments#role_name DataAwsIamRolePolicyAttachments#role_name}.

---

##### `pathPrefix`<sup>Optional</sup> <a name="pathPrefix" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsConfig.property.pathPrefix"></a>

```typescript
public readonly pathPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.41.0/docs/data-sources/iam_role_policy_attachments#path_prefix DataAwsIamRolePolicyAttachments#path_prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsIamRolePolicyAttachmentsAttachedPoliciesList <a name="DataAwsIamRolePolicyAttachmentsAttachedPoliciesList" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.Initializer"></a>

```typescript
import { dataAwsIamRolePolicyAttachments } from '@cdktn/provider-aws'

new dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.get"></a>

```typescript
public get(index: number): DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference <a name="DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.Initializer"></a>

```typescript
import { dataAwsIamRolePolicyAttachments } from '@cdktn/provider-aws'

new dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.policyArn">policyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPolicies">DataAwsIamRolePolicyAttachmentsAttachedPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsIamRolePolicyAttachmentsAttachedPolicies;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsIamRolePolicyAttachments.DataAwsIamRolePolicyAttachmentsAttachedPolicies">DataAwsIamRolePolicyAttachmentsAttachedPolicies</a>

---



