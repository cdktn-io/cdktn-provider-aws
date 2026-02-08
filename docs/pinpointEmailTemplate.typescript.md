# `pinpointEmailTemplate` Submodule <a name="`pinpointEmailTemplate` Submodule" id="@cdktn/provider-aws.pinpointEmailTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointEmailTemplate <a name="PinpointEmailTemplate" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template aws_pinpoint_email_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer"></a>

```typescript
import { pinpointEmailTemplate } from '@cdktn/provider-aws'

new pinpointEmailTemplate.PinpointEmailTemplate(scope: Construct, id: string, config: PinpointEmailTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig">PinpointEmailTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig">PinpointEmailTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.putEmailTemplate">putEmailTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetEmailTemplate">resetEmailTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEmailTemplate` <a name="putEmailTemplate" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.putEmailTemplate"></a>

```typescript
public putEmailTemplate(value: IResolvable | PinpointEmailTemplateEmailTemplate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.putEmailTemplate.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>[]

---

##### `resetEmailTemplate` <a name="resetEmailTemplate" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetEmailTemplate"></a>

```typescript
public resetEmailTemplate(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PinpointEmailTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isConstruct"></a>

```typescript
import { pinpointEmailTemplate } from '@cdktn/provider-aws'

pinpointEmailTemplate.PinpointEmailTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isTerraformElement"></a>

```typescript
import { pinpointEmailTemplate } from '@cdktn/provider-aws'

pinpointEmailTemplate.PinpointEmailTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isTerraformResource"></a>

```typescript
import { pinpointEmailTemplate } from '@cdktn/provider-aws'

pinpointEmailTemplate.PinpointEmailTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport"></a>

```typescript
import { pinpointEmailTemplate } from '@cdktn/provider-aws'

pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PinpointEmailTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PinpointEmailTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PinpointEmailTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PinpointEmailTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.emailTemplate">emailTemplate</a></code> | <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList">PinpointEmailTemplateEmailTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.emailTemplateInput">emailTemplateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.templateNameInput">templateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `emailTemplate`<sup>Required</sup> <a name="emailTemplate" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.emailTemplate"></a>

```typescript
public readonly emailTemplate: PinpointEmailTemplateEmailTemplateList;
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList">PinpointEmailTemplateEmailTemplateList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `emailTemplateInput`<sup>Optional</sup> <a name="emailTemplateInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.emailTemplateInput"></a>

```typescript
public readonly emailTemplateInput: IResolvable | PinpointEmailTemplateEmailTemplate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.templateNameInput"></a>

```typescript
public readonly templateNameInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointEmailTemplateConfig <a name="PinpointEmailTemplateConfig" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.Initializer"></a>

```typescript
import { pinpointEmailTemplate } from '@cdktn/provider-aws'

const pinpointEmailTemplateConfig: pinpointEmailTemplate.PinpointEmailTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.templateName">templateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#template_name PinpointEmailTemplate#template_name}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.emailTemplate">emailTemplate</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>[]</code> | email_template block. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#tags PinpointEmailTemplate#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#template_name PinpointEmailTemplate#template_name}.

---

##### `emailTemplate`<sup>Optional</sup> <a name="emailTemplate" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.emailTemplate"></a>

```typescript
public readonly emailTemplate: IResolvable | PinpointEmailTemplateEmailTemplate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>[]

email_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#email_template PinpointEmailTemplate#email_template}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#region PinpointEmailTemplate#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#tags PinpointEmailTemplate#tags}.

---

### PinpointEmailTemplateEmailTemplate <a name="PinpointEmailTemplateEmailTemplate" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.Initializer"></a>

```typescript
import { pinpointEmailTemplate } from '@cdktn/provider-aws'

const pinpointEmailTemplateEmailTemplate: pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.defaultSubstitutions">defaultSubstitutions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#default_substitutions PinpointEmailTemplate#default_substitutions}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#description PinpointEmailTemplate#description}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.header">header</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>[]</code> | header block. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.htmlPart">htmlPart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#html_part PinpointEmailTemplate#html_part}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.recommenderId">recommenderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#recommender_id PinpointEmailTemplate#recommender_id}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.subject">subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#subject PinpointEmailTemplate#subject}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.textPart">textPart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#text_part PinpointEmailTemplate#text_part}. |

---

##### `defaultSubstitutions`<sup>Optional</sup> <a name="defaultSubstitutions" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.defaultSubstitutions"></a>

```typescript
public readonly defaultSubstitutions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#default_substitutions PinpointEmailTemplate#default_substitutions}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#description PinpointEmailTemplate#description}.

---

##### `header`<sup>Optional</sup> <a name="header" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.header"></a>

```typescript
public readonly header: IResolvable | PinpointEmailTemplateEmailTemplateHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>[]

header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#header PinpointEmailTemplate#header}

---

##### `htmlPart`<sup>Optional</sup> <a name="htmlPart" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.htmlPart"></a>

```typescript
public readonly htmlPart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#html_part PinpointEmailTemplate#html_part}.

---

##### `recommenderId`<sup>Optional</sup> <a name="recommenderId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.recommenderId"></a>

```typescript
public readonly recommenderId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#recommender_id PinpointEmailTemplate#recommender_id}.

---

##### `subject`<sup>Optional</sup> <a name="subject" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#subject PinpointEmailTemplate#subject}.

---

##### `textPart`<sup>Optional</sup> <a name="textPart" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate.property.textPart"></a>

```typescript
public readonly textPart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#text_part PinpointEmailTemplate#text_part}.

---

### PinpointEmailTemplateEmailTemplateHeader <a name="PinpointEmailTemplateEmailTemplateHeader" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader.Initializer"></a>

```typescript
import { pinpointEmailTemplate } from '@cdktn/provider-aws'

const pinpointEmailTemplateEmailTemplateHeader: pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#name PinpointEmailTemplate#name}. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#value PinpointEmailTemplate#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#name PinpointEmailTemplate#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/pinpoint_email_template#value PinpointEmailTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PinpointEmailTemplateEmailTemplateHeaderList <a name="PinpointEmailTemplateEmailTemplateHeaderList" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer"></a>

```typescript
import { pinpointEmailTemplate } from '@cdktn/provider-aws'

new pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.get"></a>

```typescript
public get(index: number): PinpointEmailTemplateEmailTemplateHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PinpointEmailTemplateEmailTemplateHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>[]

---


### PinpointEmailTemplateEmailTemplateHeaderOutputReference <a name="PinpointEmailTemplateEmailTemplateHeaderOutputReference" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer"></a>

```typescript
import { pinpointEmailTemplate } from '@cdktn/provider-aws'

new pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PinpointEmailTemplateEmailTemplateHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>

---


### PinpointEmailTemplateEmailTemplateList <a name="PinpointEmailTemplateEmailTemplateList" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer"></a>

```typescript
import { pinpointEmailTemplate } from '@cdktn/provider-aws'

new pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.get"></a>

```typescript
public get(index: number): PinpointEmailTemplateEmailTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PinpointEmailTemplateEmailTemplate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>[]

---


### PinpointEmailTemplateEmailTemplateOutputReference <a name="PinpointEmailTemplateEmailTemplateOutputReference" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer"></a>

```typescript
import { pinpointEmailTemplate } from '@cdktn/provider-aws'

new pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.putHeader">putHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetDefaultSubstitutions">resetDefaultSubstitutions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetHeader">resetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetHtmlPart">resetHtmlPart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetRecommenderId">resetRecommenderId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetSubject">resetSubject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetTextPart">resetTextPart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeader` <a name="putHeader" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.putHeader"></a>

```typescript
public putHeader(value: IResolvable | PinpointEmailTemplateEmailTemplateHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.putHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>[]

---

##### `resetDefaultSubstitutions` <a name="resetDefaultSubstitutions" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetDefaultSubstitutions"></a>

```typescript
public resetDefaultSubstitutions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHeader` <a name="resetHeader" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetHeader"></a>

```typescript
public resetHeader(): void
```

##### `resetHtmlPart` <a name="resetHtmlPart" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetHtmlPart"></a>

```typescript
public resetHtmlPart(): void
```

##### `resetRecommenderId` <a name="resetRecommenderId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetRecommenderId"></a>

```typescript
public resetRecommenderId(): void
```

##### `resetSubject` <a name="resetSubject" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetSubject"></a>

```typescript
public resetSubject(): void
```

##### `resetTextPart` <a name="resetTextPart" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.resetTextPart"></a>

```typescript
public resetTextPart(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.header">header</a></code> | <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList">PinpointEmailTemplateEmailTemplateHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.defaultSubstitutionsInput">defaultSubstitutionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.headerInput">headerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.htmlPartInput">htmlPartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.recommenderIdInput">recommenderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.subjectInput">subjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.textPartInput">textPartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.defaultSubstitutions">defaultSubstitutions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.htmlPart">htmlPart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.recommenderId">recommenderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.subject">subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.textPart">textPart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `header`<sup>Required</sup> <a name="header" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.header"></a>

```typescript
public readonly header: PinpointEmailTemplateEmailTemplateHeaderList;
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeaderList">PinpointEmailTemplateEmailTemplateHeaderList</a>

---

##### `defaultSubstitutionsInput`<sup>Optional</sup> <a name="defaultSubstitutionsInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.defaultSubstitutionsInput"></a>

```typescript
public readonly defaultSubstitutionsInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `headerInput`<sup>Optional</sup> <a name="headerInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.headerInput"></a>

```typescript
public readonly headerInput: IResolvable | PinpointEmailTemplateEmailTemplateHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateHeader">PinpointEmailTemplateEmailTemplateHeader</a>[]

---

##### `htmlPartInput`<sup>Optional</sup> <a name="htmlPartInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.htmlPartInput"></a>

```typescript
public readonly htmlPartInput: string;
```

- *Type:* string

---

##### `recommenderIdInput`<sup>Optional</sup> <a name="recommenderIdInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.recommenderIdInput"></a>

```typescript
public readonly recommenderIdInput: string;
```

- *Type:* string

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.subjectInput"></a>

```typescript
public readonly subjectInput: string;
```

- *Type:* string

---

##### `textPartInput`<sup>Optional</sup> <a name="textPartInput" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.textPartInput"></a>

```typescript
public readonly textPartInput: string;
```

- *Type:* string

---

##### `defaultSubstitutions`<sup>Required</sup> <a name="defaultSubstitutions" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.defaultSubstitutions"></a>

```typescript
public readonly defaultSubstitutions: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `htmlPart`<sup>Required</sup> <a name="htmlPart" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.htmlPart"></a>

```typescript
public readonly htmlPart: string;
```

- *Type:* string

---

##### `recommenderId`<sup>Required</sup> <a name="recommenderId" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.recommenderId"></a>

```typescript
public readonly recommenderId: string;
```

- *Type:* string

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.subject"></a>

```typescript
public readonly subject: string;
```

- *Type:* string

---

##### `textPart`<sup>Required</sup> <a name="textPart" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.textPart"></a>

```typescript
public readonly textPart: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PinpointEmailTemplateEmailTemplate;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.pinpointEmailTemplate.PinpointEmailTemplateEmailTemplate">PinpointEmailTemplateEmailTemplate</a>

---



