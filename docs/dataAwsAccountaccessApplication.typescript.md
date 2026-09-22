# `dataAwsAccountaccessApplication` Submodule <a name="`dataAwsAccountaccessApplication` Submodule" id="@cdktn/provider-aws.dataAwsAccountaccessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsAccountaccessApplication <a name="DataAwsAccountaccessApplication" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application aws_accountaccess_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer"></a>

```typescript
import { dataAwsAccountaccessApplication } from '@cdktn/provider-aws'

new dataAwsAccountaccessApplication.DataAwsAccountaccessApplication(scope: Construct, id: string, config?: DataAwsAccountaccessApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig">DataAwsAccountaccessApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig">DataAwsAccountaccessApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetIdentityCenterInstanceArn">resetIdentityCenterInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetIdentityCenterInstanceArn` <a name="resetIdentityCenterInstanceArn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetIdentityCenterInstanceArn"></a>

```typescript
public resetIdentityCenterInstanceArn(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsAccountaccessApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isConstruct"></a>

```typescript
import { dataAwsAccountaccessApplication } from '@cdktn/provider-aws'

dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformElement"></a>

```typescript
import { dataAwsAccountaccessApplication } from '@cdktn/provider-aws'

dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformDataSource"></a>

```typescript
import { dataAwsAccountaccessApplication } from '@cdktn/provider-aws'

dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport"></a>

```typescript
import { dataAwsAccountaccessApplication } from '@cdktn/provider-aws'

dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsAccountaccessApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsAccountaccessApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsAccountaccessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsAccountaccessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.identitySource">identitySource</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList">DataAwsAccountaccessApplicationIdentitySourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.identityCenterInstanceArnInput">identityCenterInstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.identityCenterInstanceArn">identityCenterInstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `identitySource`<sup>Required</sup> <a name="identitySource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.identitySource"></a>

```typescript
public readonly identitySource: DataAwsAccountaccessApplicationIdentitySourceList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList">DataAwsAccountaccessApplicationIdentitySourceList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `identityCenterInstanceArnInput`<sup>Optional</sup> <a name="identityCenterInstanceArnInput" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.identityCenterInstanceArnInput"></a>

```typescript
public readonly identityCenterInstanceArnInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `identityCenterInstanceArn`<sup>Required</sup> <a name="identityCenterInstanceArn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.identityCenterInstanceArn"></a>

```typescript
public readonly identityCenterInstanceArn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsAccountaccessApplicationConfig <a name="DataAwsAccountaccessApplicationConfig" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.Initializer"></a>

```typescript
import { dataAwsAccountaccessApplication } from '@cdktn/provider-aws'

const dataAwsAccountaccessApplicationConfig: dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#arn DataAwsAccountaccessApplication#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.identityCenterInstanceArn">identityCenterInstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#identity_center_instance_arn DataAwsAccountaccessApplication#identity_center_instance_arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#arn DataAwsAccountaccessApplication#arn}.

---

##### `identityCenterInstanceArn`<sup>Optional</sup> <a name="identityCenterInstanceArn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.identityCenterInstanceArn"></a>

```typescript
public readonly identityCenterInstanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#identity_center_instance_arn DataAwsAccountaccessApplication#identity_center_instance_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/data-sources/accountaccess_application#region DataAwsAccountaccessApplication#region}

---

### DataAwsAccountaccessApplicationIdentitySource <a name="DataAwsAccountaccessApplicationIdentitySource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySource.Initializer"></a>

```typescript
import { dataAwsAccountaccessApplication } from '@cdktn/provider-aws'

const dataAwsAccountaccessApplicationIdentitySource: dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySource = { ... }
```


### DataAwsAccountaccessApplicationIdentitySourceIdentityCenter <a name="DataAwsAccountaccessApplicationIdentitySourceIdentityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenter.Initializer"></a>

```typescript
import { dataAwsAccountaccessApplication } from '@cdktn/provider-aws'

const dataAwsAccountaccessApplicationIdentitySourceIdentityCenter: dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenter = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList <a name="DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer"></a>

```typescript
import { dataAwsAccountaccessApplication } from '@cdktn/provider-aws'

new dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.get"></a>

```typescript
public get(index: number): DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference <a name="DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer"></a>

```typescript
import { dataAwsAccountaccessApplication } from '@cdktn/provider-aws'

new dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenter">DataAwsAccountaccessApplicationIdentitySourceIdentityCenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAccountaccessApplicationIdentitySourceIdentityCenter;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenter">DataAwsAccountaccessApplicationIdentitySourceIdentityCenter</a>

---


### DataAwsAccountaccessApplicationIdentitySourceList <a name="DataAwsAccountaccessApplicationIdentitySourceList" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer"></a>

```typescript
import { dataAwsAccountaccessApplication } from '@cdktn/provider-aws'

new dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.get"></a>

```typescript
public get(index: number): DataAwsAccountaccessApplicationIdentitySourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsAccountaccessApplicationIdentitySourceOutputReference <a name="DataAwsAccountaccessApplicationIdentitySourceOutputReference" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer"></a>

```typescript
import { dataAwsAccountaccessApplication } from '@cdktn/provider-aws'

new dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.identityCenter">identityCenter</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList">DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySource">DataAwsAccountaccessApplicationIdentitySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityCenter`<sup>Required</sup> <a name="identityCenter" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.identityCenter"></a>

```typescript
public readonly identityCenter: DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList">DataAwsAccountaccessApplicationIdentitySourceIdentityCenterList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsAccountaccessApplicationIdentitySource;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsAccountaccessApplication.DataAwsAccountaccessApplicationIdentitySource">DataAwsAccountaccessApplicationIdentitySource</a>

---



