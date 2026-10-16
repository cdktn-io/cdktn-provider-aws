# `devopsagentAgentSpace` Submodule <a name="`devopsagentAgentSpace` Submodule" id="@cdktn/provider-aws.devopsagentAgentSpace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentAgentSpace <a name="DevopsagentAgentSpace" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/devopsagent_agent_space aws_devopsagent_agent_space}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-aws'

new devopsagentAgentSpace.DevopsagentAgentSpace(scope: Construct, id: string, config: DevopsagentAgentSpaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig">DevopsagentAgentSpaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig">DevopsagentAgentSpaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetLocale">resetLocale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetLocale` <a name="resetLocale" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetLocale"></a>

```typescript
public resetLocale(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentAgentSpace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.isConstruct"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-aws'

devopsagentAgentSpace.DevopsagentAgentSpace.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformElement"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-aws'

devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformResource"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-aws'

devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-aws'

devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DevopsagentAgentSpace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DevopsagentAgentSpace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DevopsagentAgentSpace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/devopsagent_agent_space#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentAgentSpace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.agentSpaceId">agentSpaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentSpaceId`<sup>Required</sup> <a name="agentSpaceId" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.agentSpaceId"></a>

```typescript
public readonly agentSpaceId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentAgentSpaceConfig <a name="DevopsagentAgentSpaceConfig" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.Initializer"></a>

```typescript
import { devopsagentAgentSpace } from '@cdktn/provider-aws'

const devopsagentAgentSpaceConfig: devopsagentAgentSpace.DevopsagentAgentSpaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.name">name</a></code> | <code>string</code> | Name of the Agent Space. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.description">description</a></code> | <code>string</code> | Description of the Agent Space. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | ARN of the KMS key used to encrypt resources. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.locale">locale</a></code> | <code>string</code> | Locale for the Agent Space, which determines the language used in agent responses. |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/devopsagent_agent_space#tags DevopsagentAgentSpace#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Agent Space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/devopsagent_agent_space#name DevopsagentAgentSpace#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the Agent Space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/devopsagent_agent_space#description DevopsagentAgentSpace#description}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

ARN of the KMS key used to encrypt resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/devopsagent_agent_space#kms_key_arn DevopsagentAgentSpace#kms_key_arn}

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

Locale for the Agent Space, which determines the language used in agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/devopsagent_agent_space#locale DevopsagentAgentSpace#locale}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/devopsagent_agent_space#region DevopsagentAgentSpace#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.devopsagentAgentSpace.DevopsagentAgentSpaceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/devopsagent_agent_space#tags DevopsagentAgentSpace#tags}.

---



